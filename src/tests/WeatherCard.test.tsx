import renderer from 'react-test-renderer';
import WeatherCard from '../components/WeatherCard';
import { ETempType } from '../utils/enums';
import { IWeather } from '../utils/interfaces';


test('Test Weather Card', () => {
    const tempType: ETempType = ETempType.c;
    const temp_item: IWeather = {
        id: 1,
        temp: 0,
        temp_f: 0,
        temp_c: 0,
        dt_txt: "test",
        tm_txt: "test"
    }
    const currentDay: string = "test";
    const setCurrentDay = () => { };

    const component = renderer.create(
        <WeatherCard tempType={tempType} temp_item={temp_item} setCurrentDay={setCurrentDay} currentDay={currentDay} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});