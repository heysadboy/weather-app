import { EActionType } from './enums';

export interface IAction {
    type: EActionType,
    payload: IWeather[] | IWeather | IPage
}

export interface IWeather {
    id: number,
    temp: number,
    temp_f: number,
    temp_c: number,
    dt_txt: string,
}

export interface IPage {
    start: number,
    end: number
}