import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { tempData } from '../actions';
import { IAction, IStatus, IWeather } from '../utils/interfaces'
import { AppState } from '../utils/types'
import PageIndexer from './PageIndexer';
import WeatherList from './WeatherList';
import '../css/App.css';
import TempType from './TempType';
import { EStatusType, ETempType } from '../utils/enums';
import TempChart from './TempChart';
import Loader from './Loader';
import Error from './Error';

interface IAppProp {
  tempData: () => void,
  temperature: IWeather[],
  status: IStatus
}

const mapStateToProps = (state: AppState) => ({
  page: state.page,
  temperature: state.temperature,
  status: state.status
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
  tempData: bindActionCreators(tempData, dispatch)
});

const App: FC<IAppProp> = ({ tempData, temperature, status }) => {
  const [tempType, setTempType] = useState<ETempType>(ETempType.f);
  const [currentDay, setCurrentDay] = useState<string>("");

  useEffect(() => {
    tempData();
  }, [tempData]);

  useEffect(() => {
    if (temperature.length > 1) {
      setCurrentDay(temperature[1].dt_txt);
    }
  }, [temperature]);

  if (status.code === EStatusType.ok) {
    return (
      <div id="app-container" className="ui container">
        <TempType tempType={tempType} setTempType={setTempType} />
        <PageIndexer />
        <WeatherList setCurrentDay={setCurrentDay} currentDay={currentDay} tempType={tempType} />
        <TempChart currentDay={currentDay} tempType={tempType} />
      </div>
    );
  }
  else if(status.code === EStatusType.error) {
    return (<Error />)
  }
  else {
    return (<Loader />)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);