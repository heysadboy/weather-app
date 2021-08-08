import { EActionType } from '../utils/enums';
import { IAction } from '../utils/interfaces';


const barDataReducer = (state = [], action: IAction) => {
    switch (action.type) {
        case EActionType.barchart_data:
            return action.payload;
        default:
            return state;
    }
};

export default barDataReducer;