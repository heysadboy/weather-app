import { FC } from "react";
import { ETempType } from "../utils/enums";
import '../css/TempType.css';

interface ITempTypeProps {
    tempType: ETempType,
    setTempType: (tempType: ETempType) => void
}

const TempType: FC<ITempTypeProps> = ({ setTempType, tempType }) => {

    const tempTypeController = (e: any) => {
        setTempType(e.target.value);
    };

    return (
        <div id="temp-type-container" className="ui two column grid">
            <div className="row grouped fields" onChange={tempTypeController}>
                <div className="left algined column field">
                    <div id="f-temp-input" className="ui radio checkbox">
                        <input type="radio" value={ETempType.f} name="temperature-choice" defaultChecked={tempType === ETempType.f ? true : false} />
                        <label>{ETempType.f}</label>
                    </div>
                </div>
                <div className="right aligned column field">
                    <div id="t-temp-input" className="ui radio checkbox">
                        <input type="radio" value={ETempType.c} name="temperature-choice" defaultChecked={tempType === ETempType.c ? true : false} />
                        <label>{ETempType.c}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempType;