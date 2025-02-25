/* eslint-disable react/prop-types */

function Weather(props) {
    // Function to convert Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2); // Convert and round to 2 decimal places
    };

    return (
        <div className={`container ${props.visible ? 'visible' : 'hidden'}`}>
            {props.city && props.country && (
                <>
                    <span>Location:</span>
                    <div className="results">
                        {props.city}, {props.country}
                    </div>
                </>
            )}
            {props.temperature && (
                <>
                    <span>Temperature:</span>
                    <div className="results">
                        {kelvinToCelsius(props.temperature)}°C
                    </div>
                    </>
            )}
            {props.humidity && (
                <>
                    <span>Humidity:</span>
                    <div className="results">{props.humidity}%</div>
                    </>
            )}
            {props.description && (
                <>
                    <span>Conditions:</span>
                    <div className="results">{props.description}</div>
                    </>
            )}
            {props.error && (
                <>
                    <span>Error:</span>
                    <div className="results">{props.error}</div>
                    </>
            )}
        </div>
    );
}

export default Weather;
