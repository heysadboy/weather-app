import renderer from 'react-test-renderer';
import Loader from '../components/Loader';


test('Test Loader', () => {
    const component = renderer.create(
        <Loader />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});