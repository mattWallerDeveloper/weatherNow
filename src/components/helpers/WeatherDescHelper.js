const WeatherDescHelper = (props) => {
    const {code} = props;

    if (code === 0) {
        return <span>Clear sky</span>
    } else if (code === 1 || code === 2 || code === 3) {
        return <span>Mainly clear, partly cloudy, and overcast</span>
    } else if (code === 45 || code === 48) {
        return <span>Fog and depositing rime fog</span>
    } else if (code === 51 || code === 53 || code === 55) {
        return <span>Drizzle: Light, moderate, and dense intensity</span>
    } else if (code === 56 || code === 57) {
        return <span>Freezing Drizzle: Light and dense intensity</span>
    } else if (code === 61 || code === 63 || code === 65) {
        return <span>Rain: Slight, moderate and heavy intensity</span>
    } else if (code === 66 || code === 67) {
        return <span>Freezing Rain: Light and heavy intensity</span>
    } else if (code === 71 || code === 73 || code === 75) {
        return <span>Snow fall: Slight, moderate, and heavy intensity</span>
    } else if (code === 77) {
        return <span>Snow grains</span>
    } else if (code === 80 || code === 81 || code === 82) {
        return <span>Rain showers: Slight, moderate, and violent</span>
    } else if (code === 85 || code === 86) {
        return <span>Snow showers slight and heavy</span>
    } else if (code === 95) {
        return <span>Thunderstorm: Slight or moderate</span>
    } else if (code === 96 || 99) {
        return <span>Thunderstorm with slight and heavy hail</span>
    }
}

export default WeatherDescHelper;