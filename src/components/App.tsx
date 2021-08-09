import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { tempData } from '../actions';
import { IAction } from '../utils/interfaces'
import { AppState } from '../utils/types'
import PageIndexer from './PageIndexer';
import WeatherList from './WeatherList';
import '../css/App.css';
import TempType from './TempType';
import { ETempType } from '../utils/enums';
import TempChart from './TempChart';

interface IAppProp {
  tempData: () => void,
}

const mapStateToProps = (state: AppState) => ({
  page: state.page
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
  tempData: bindActionCreators(tempData, dispatch)
});

const App: FC<IAppProp> = ({ tempData }) => {
  const [tempType, setTempType] = useState<ETempType>(ETempType.f);

  useEffect(() => {
    tempData();
  }, [tempData]);

  return (
    <div id="app-container" className="ui container">
      <TempType tempType={tempType} setTempType={setTempType} />
      <PageIndexer />
      <WeatherList tempType={tempType} />
      <TempChart tempType={tempType} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);