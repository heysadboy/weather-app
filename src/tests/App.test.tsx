import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import App from '../components/App';
import reducers from '../reducers';


test('Test App', () => {
    const store = createStore(reducers);
    const component = renderer.create(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});