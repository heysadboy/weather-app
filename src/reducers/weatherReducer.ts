import { EActionType } from '../utils/enums';
import { IAction } from '../utils/interfaces';


const weatherReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        case EActionType.fetch_weather:
            return action.payload;
        default:
            return state;
    }
};

export default weatherReducer;