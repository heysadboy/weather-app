import { INITAIL_STATUS } from '../utils/data';
import { EStatusType } from '../utils/enums';
import { IAction } from '../utils/interfaces';

const statusReducer = (state = {INITAIL_STATUS}, action: IAction) => {
    switch (action.type) {
        case EStatusType.error:
            return action.payload;
        case EStatusType.ok:
            return action.payload;
        case EStatusType.loading:
            return action.payload;
        default:
            return state;
    }
}

export default statusReducer;