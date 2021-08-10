import { FC } from "react";
import { IWeather } from "../utils/interfaces";
import { ETempType } from '../utils/enums';
import '../css/WeatherCard.css';

interface IWeatherCardProp {
    temp_item: IWeather,
    tempType: ETempType,
    setCurrentDay: (currentDay: string) => void,
    currentDay: string
}

const WeatherCard: FC<IWeatherCardProp> = ({ temp_item, tempType, setCurrentDay, currentDay }) => {

    const getTypeTemp = () => {
        if (tempType === ETempType.f) {
            return temp_item.temp_f + " °F";
        }
        else {
            return temp_item.temp_c + " °C";
        }
    }

    return (
        <div id="weather-card-container" className="column" key={temp_item.id}>
            <div id="weather-card" className={`ui centered ${currentDay === temp_item.dt_txt ? 'grey' : ''} card`} onClick={() => { setCurrentDay(temp_item.dt_txt) }}>
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