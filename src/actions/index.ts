import { Dispatch } from 'redux';
import { IAction, IWeatherData } from '../utils/interfaces';
import OpenWeather from '../api/OpenWeather';
import { EActionType } from '../utils/enums';


export const fetchWeather = () => async (dispatch: Dispatch<IAction>) => {
    const response: IWeatherData = (await OpenWeather.get('/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')).data;
    dispatch({ type: EActionType.fetch_weather, payload: response });
};