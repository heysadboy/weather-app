import { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { tempData } from "../actions";
import { IWeather, IAction, IPage } from "../utils/interfaces";
import { AppState } from "../utils/types";

interface IWeatherListProp {
    temperature: IWeather[],
    page: IPage,
    tempData: () => void,
}

const mapStateToProps = (state: AppState) => ({
    temperature: state.temparture,
    page: state.page
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
    tempData: bindActionCreators(tempData, dispatch)
});

const WeatherList: FC<IWeatherListProp> = ({ page, temperature, tempData }) => {
    const renderedTempList = temperature.slice(page.start, page.end + 1).map((temp_item) => {
        return (
            <div className="column" key={temp_item.id}>
                <div className="ui raised link card">
                    <div>Date:{temp_item.dt_txt}</div>
                    <div>Temp:{temp_item.temp}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="ui three column divided grid">
            <div className="row">
                {renderedTempList}
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);