import { EActionType } from '../utils/enums';
import { IAction } from '../utils/interfaces';


const tempDataReducer = (state = [], action: IAction) => {
    switch (action.type) {
        case EActionType.temp_data:
            return action.payload;
        default:
            return state;
    }
};

export default tempDataReducer;