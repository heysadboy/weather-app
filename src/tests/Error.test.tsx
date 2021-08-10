import renderer from 'react-test-renderer';
import Error from '../components/Error';


test('Test Error', () => {
    const component = renderer.create(
        <Error />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});