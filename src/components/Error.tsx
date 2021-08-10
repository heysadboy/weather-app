import '../css/Error.css';


const Error = () => {
    return (
        <div id="error-container" className="ui center aligned container">
            <div className="ui negative message">
                <div className="header">We're sorry some error occurred</div>
                <p>Please try again later</p>
            </div>
        </div>
    );
}

export default Error;