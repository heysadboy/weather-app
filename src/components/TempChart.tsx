import { FC } from "react";
import { connect } from "react-redux";
import { BarChart, Bar, XAxis } from "recharts";
import '../css/TempChart.css'
import { ETempType } from "../utils/enums";
import { IWeather } from "../utils/interfaces";
import { AppState } from "../utils/types";

interface ITempChartProp {
    weather: IWeather[] | [],
    tempType: ETempType,
    currentDay: string
}

const mapStateToProps = (state: AppState) => ({
    weather: state.weather,
});

const TempChart: FC<ITempChartProp> = ({ tempType, weather, currentDay }) => {
    const getTempKey = () => {
        if (tempType === ETempType.f) {
            return "temp_f";
        }
        else {
            return "temp_c";
        }
    }

    const barData = weather.filter((weather_item) => {
        return (weather_item.dt_txt === currentDay)
    });

    return (
        <div id="temp-container" className="ui center aligned grid">
            <BarChart id="temp-chart" width={800} height={500} data={barData}>
                <XAxis dataKey={getTempKey()} />
                <Bar dataKey={getTempKey()} fill="#424242" />
            </BarChart>

        </div>
    );
}

export default connect(mapStateToProps)(TempChart);