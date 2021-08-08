import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { tempData } from '../actions';
import { IAction } from '../utils/interfaces'
import { AppState } from '../utils/types'
import PageIndexer from './PageIndexer';
import WeatherList from './WeatherList';

interface IAppProp {
  tempData: () => void,
}

const mapStateToProps = (state: AppState) => ({
  temperature: state.temparture,
  page: state.page
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
  tempData: bindActionCreators(tempData, dispatch)
});

const App: FC<IAppProp> = ({ tempData }) => {
  useEffect(() => {
    tempData();
  }, [tempData]);


  return (
    <div className="ui container">
      <PageIndexer />
      <WeatherList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);