import renderer from 'react-test-renderer';
import WeatherList from '../components/WeatherList';
import { ETempType } from '../utils/enums';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';;


test('Test Weather List', () => {
    const tempType: ETempType = ETempType.c;
    const currentDay: string = "test";
    const setCurrentDay = () => { };
    const store = createStore(reducers);

    const component = renderer.create(
        <Provider store={store}>
            <WeatherList tempType={tempType} setCurrentDay={setCurrentDay} currentDay={currentDay} />
        </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});