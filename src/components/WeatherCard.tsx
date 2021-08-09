import { FC } from "react";
import { IWeather } from "../utils/interfaces";
import { ETempType } from '../utils/enums';
import '../css/WeatherCard.css';

interface IWeatherCardProp {
    temp_item: IWeather,
    tempType: ETempType
}

const WeatherCard: FC<IWeatherCardProp> = ({ temp_item, tempType }) => {

    const getTypeTemp = () => {
        if (tempType === ETempType.f) {
            let conv_temp = temp_item.temp_f + " °F";
            return conv_temp;
        }
        else {
            let conv_temp = temp_item.temp_c + " °C";
            return conv_temp;
        }
    }

    return (
        <div id="weather-card-container" className="column" key={temp_item.id}>
            <div id="weather-card" className="ui centered card">
                <div className="content">
                    <div className="header">{getTypeTemp()}</div>
                    <div className="description">
                        <p><i id="calendar-icon" className="calendar outline icon" />{temp_item.dt_txt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;