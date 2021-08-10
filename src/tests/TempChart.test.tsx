import renderer from 'react-test-renderer';
import TempChart from '../components/TempChart';
import { ETempType } from '../utils/enums';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


test('Test Temp Chart', () => {
    const tempType: ETempType = ETempType.c;
    const currentDay: string = "test";
    const store = createStore(reducers);

    const component = renderer.create(
        <Provider store={store}>
            <TempChart tempType={tempType} currentDay={currentDay} />
        </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});