import renderer from 'react-test-renderer';
import TempType from '../components/TempType';
import { ETempType } from '../utils/enums';


test('Test Temp Type', () => {
    const tempType: ETempType = ETempType.c;
    const setTempType = () => { };

    const component = renderer.create(
        <TempType tempType={tempType} setTempType={setTempType} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});