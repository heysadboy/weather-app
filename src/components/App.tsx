import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { tempData } from '../actions';
import { IAction, IWeather } from '../utils/interfaces'
import { AppState } from '../utils/types'
import PageIndexer from './PageIndexer';
import WeatherList from './WeatherList';
import '../css/App.css';
import TempType from './TempType';
import { ETempType } from '../utils/enums';
import TempChart from './TempChart';

interface IAppProp {
  tempData: () => void,
  temperature: IWeather[],
}

const mapStateToProps = (state: AppState) => ({
  page: state.page,
  temperature: state.temperature
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
  tempData: bindActionCreators(tempData, dispatch)
});

const App: FC<IAppProp> = ({ tempData, temperature }) => {
  const [tempType, setTempType] = useState<ETempType>(ETempType.f);
  const [currentDay, setCurrentDay] = useState<string>("");

  useEffect(() => {
    tempData();
  }, [tempData]);

  useEffect(() => {
    if (temperature.length > 0) {
      setCurrentDay(temperature[0].dt_txt);
    }
  }, [temperature]);

  return (
    <div id="app-container" className="ui container">
      <TempType tempType={tempType} setTempType={setTempType} />
      <PageIndexer />
      <WeatherList setCurrentDay={setCurrentDay} currentDay={currentDay} tempType={tempType} />
      <TempChart currentDay={currentDay} tempType={tempType} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);