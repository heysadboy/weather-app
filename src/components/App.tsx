import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchWeather } from '../actions';
import { IWeatherData, IAction } from '../utils/interfaces'
import { AppState } from '../utils/types'

interface IAppProp {
  weather: IWeatherData | {}
  fetchWeather: () => void
}

const mapStateToProps = (state: AppState) => ({
  weather: state.weather
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
  fetchWeather: bindActionCreators(fetchWeather, dispatch),
});

const App: FC<IAppProp> = ({ weather, fetchWeather }) => {
  useEffect(fetchWeather, [fetchWeather]);

  console.log(weather);
  return (<div>Hi</div>);
}



export default connect(mapStateToProps, mapDispatchToProps)(App);