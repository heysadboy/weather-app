import { FC } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../utils/types'
import { leftPage, rightPage } from '../actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { IAction } from '../utils/interfaces';
import '../css/PageIndexer.css';

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
        <div id="page-index-container">
            <div id="left-button" onClick={() => { leftPage() }}><i className="arrow left big icon" /></div>
            <div id="right-button" onClick={() => { rightPage() }}><i className="arrow right big icon" /></div>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(PageIndexer);