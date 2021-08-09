import { FC } from "react";
import { connect } from "react-redux";
import { BarChart, Bar, XAxis } from "recharts";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { tempData } from "../actions";
import '../css/TempChart.css'
import { ETempType } from "../utils/enums";
import { IAction, IWeather } from "../utils/interfaces";
import { AppState } from "../utils/types";

interface ITempChartProp {
    weather: IWeather[] | [],
    tempType: ETempType
}

const mapStateToProps = (state: AppState) => ({
    weather: state.weather,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<AppState, {}, IAction>
) => ({
    tempData: bindActionCreators(tempData, dispatch)
});

const TempChart: FC<ITempChartProp> = ({ tempType, weather }) => {

    const getTempKey = () => {
        if (tempType === ETempType.f) {
            return "temp_f";
        }
        else {
            return "temp_c";
        }
    }

    return (
        <div id="temp-container" className="ui center aligned grid">
            <BarChart id="temp-chart" width={800} height={500} data={weather.slice(0, 8)}>
                <XAxis dataKey={getTempKey()} />
                <Bar dataKey={getTempKey()} fill="#424242" />
            </BarChart>
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(TempChart);