import { Dispatch } from 'redux';
import { IAction, IWeather } from '../utils/interfaces';
import OpenWeather from '../api/OpenWeather';
import { EActionType, ETempType } from '../utils/enums';
import { AppState } from '../utils/types';
import { ThunkDispatch } from 'redux-thunk';
import { APP_ID } from '../utils/data';

const convertTemp = (temp: number, tempType: ETempType) => {
    if (tempType === ETempType.f) {
        let new_temp: number = ((temp * 9 / 5) - 459.67);
        let conv_temp = Number(new_temp.toFixed(1));
        return conv_temp;
    }
    else {
        let new_temp: number = temp - 273.15;
        let conv_temp = Number(new_temp.toFixed(1));
        return conv_temp;
    }
}

export const fetchWeather = () => async (dispatch: Dispatch<IAction>) => {
    const response = await OpenWeather.get(`/data/2.5/forecast?q=Munich,de&APPID=${APP_ID}&cnt=40`);

    if (response.status === 200) {
        const weather: IWeather[] = response.data.list.map((item: any) => {
            const weather_item: IWeather = {
                id: item.dt,
                temp: item.main.temp,
                temp_f: convertTemp(item.main.temp, ETempType.f),
                temp_c: convertTemp(item.main.temp, ETempType.c),
                dt_txt: item.dt_txt,
            }
            return weather_item;
        });

        const weatherAction: IAction = { type: EActionType.fetch_weather, payload: weather }
        dispatch(weatherAction);

    } else {
        //set error state
    }

};

export const tempData = () => async (dispatch: ThunkDispatch<AppState, {}, IAction>, getState: () => AppState) => {
    await dispatch(fetchWeather())

    const weather = getState().weather as IWeather[];
    const average_weather = new Map<string, number[]>();

    for (const item of weather) {
        const temp_date: string = item.dt_txt.split(" ")[0];
        if (!average_weather.has(temp_date)) {
            average_weather.set(temp_date, [item.temp])
        }
        else {
            average_weather.get(temp_date)?.push(item.temp)
        }
    }

    const temp_list: IWeather[] = [];

    average_weather.forEach((temp, day) => {
        const avg_temp = temp?.reduce((a, b) => a + b, 0) / temp.length;
        const temp_item: IWeather = {
            id: Number(day.split("-").join("")),
            temp: avg_temp,
            temp_f: convertTemp(avg_temp, ETempType.f),
            temp_c: convertTemp(avg_temp, ETempType.c),
            dt_txt: day,
        }
        temp_list.push(temp_item)
    })

    const tempAction: IAction = { type: EActionType.temp_data, payload: temp_list }
    dispatch(tempAction)
}

export const barData = () => async (dispatch: ThunkDispatch<AppState, {}, IAction>, getState: () => AppState) => {

}

export const leftPage = () => async (dispatch: ThunkDispatch<AppState, {}, IAction>, getState: () => AppState) => {
    dispatch({ type: EActionType.left_page, payload: getState().page });
}

export const rightPage = () => async (dispatch: ThunkDispatch<AppState, {}, IAction>, getState: () => AppState) => {
    dispatch({ type: EActionType.right_page, payload: getState().page });
}