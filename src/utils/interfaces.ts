import { EActionType } from './enums';
import { TCoord } from './types';

export interface IAction {
    type: EActionType,
    payload: IWeatherData
}

export interface ICity {
    id: number,
    name: string,
    coord: TCoord,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}

export interface IWeatherMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
}

export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IClouds {
    all: number
}

export interface IWind {
    speed: number,
    deg: number,
    gust: number
}

export interface IRain {
    "3h": number
}

export interface ISnow {
    "3h": number
}

export interface ISys {
    pod: string
}

export interface IWeatherList {
    dt: number,
    main: IWeatherMain
    weather: IWeather,
    clouds: IClouds,
    wind: IWind,
    visibility: number,
    pop: number,
    rain: IRain,
    snow: ISnow
    sys: ISys,
    dt_txt: string
}

export interface IWeatherData {
    cod: number,
    message: number,
    cnt: number,
    list: IWeatherList[],
    city: ICity
}