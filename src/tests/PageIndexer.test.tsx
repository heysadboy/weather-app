import renderer from 'react-test-renderer';
import PageIndexer from '../components/PageIndexer';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


test('Test Page Indexer', () => {
    const store = createStore(reducers);
    const component = renderer.create(
        <Provider store={store}>
            <PageIndexer />
        </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});