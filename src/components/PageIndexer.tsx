import { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../utils/types'
import { leftPage, rightPage } from '../actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { IAction } from '../utils/interfaces';


interface IPageIndexerProps {
    leftPage: () => void,
    rightPage: () => void
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
    leftPage: bindActionCreators(leftPage, dispatch),
    rightPage: bindActionCreators(rightPage, dispatch)
});

const PageIndexer: FC<IPageIndexerProps> = ({ leftPage, rightPage }) => {

    return (
        <div >
            <button className="ui right floated button" onClick={() => { rightPage() }} >Right Floated</button>
            <button className="ui left floated button" onClick={() => { leftPage() }}>Left Floated</button>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(PageIndexer);