import { EActionType } from '../utils/enums';
import { IAction } from '../utils/interfaces';
import { INITIAL_PAGE } from '../utils/data';

const pageReducer = (state = INITIAL_PAGE, action: IAction) => {
    switch (action.type) {
        case EActionType.left_page:
            if (state.start > 0) {
                return { ...state, start: state.start - 1, end: state.end - 1 };
            }
            else {
                return state;
            }

        case EActionType.right_page:
            if (state.end < 5) {
                return { ...state, start: state.start + 1, end: state.end + 1 };
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export default pageReducer;