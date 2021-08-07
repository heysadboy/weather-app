import { IAction } from './interfaces';
import  combineReducers  from '../reducers'

export type TDispatch = (args: IAction) => IAction;

export type TCoord = {
    lat: number,
    lon: number
}

export type AppState = ReturnType<typeof combineReducers>