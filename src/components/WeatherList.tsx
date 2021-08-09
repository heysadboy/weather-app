import { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { tempData } from "../actions";
import { IWeather, IAction, IPage } from "../utils/interfaces";
import { AppState } from "../utils/types";
import '../css/WeatherList.css';
import WeatherCard from "./WeatherCard";
import { ETempType } from "../utils/enums";

interface IWeatherListProp {
    temperature: IWeather[],
    page: IPage,
    tempData: () => void,
    tempType: ETempType
}

const mapStateToProps = (state: AppState) => ({
    temperature: state.temperature,
    page: state.page
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
    tempData: bindActionCreators(tempData, dispatch)
});

const WeatherList: FC<IWeatherListProp> = ({ page, temperature, tempType }) => {
    const renderedTempList = temperature.slice(page.start, page.end + 1).map((temp_item) => {
        return (<WeatherCard key={temp_item.id} tempType={tempType} temp_item={temp_item} />);
    });

    return (
        <div id="weather-list" className="ui three column grid container">
            <div id="weather-row" className="row">
                {renderedTempList}
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);