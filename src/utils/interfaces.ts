import { EActionType, EStatusType } from './enums';

export interface IAction {
    type: EActionType | EStatusType,
    payload: IWeather[] | IWeather | IPage | IStatus
}

export interface IWeather {
    id: number,
    temp: number,
    temp_f: number,
    temp_c: number,
    dt_txt: string,
    tm_txt: string
}

export interface IPage {
    start: number,
    end: number
}

export interface IStatus {
    code: EStatusType
    message: string
}