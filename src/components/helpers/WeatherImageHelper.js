import Sun from '../../assets/sunImg.jpg';
import partSun from '../../assets/partSunImg.jpg';
import overcast from '../../assets/overcastImg.jpg';
import thunder from '../../assets/thunderImg.jpg';
import snow from '../../assets/snowImg.jpg';
import rain from '../../assets/rainImg.jpg';

const WeatherImageHelper = (props) => {
    const {code} = props;

    if (code === 0) {
        return <img alt="Full Sun" src={Sun}/>
    } else if (code === 1 || code === 2 || code === 3) {
        return <img alt="Partly Sun" src={partSun}/>
    } else if (code === 45 || code === 48) {
        return <img alt="Fog" src={overcast}/>
    } else if (code === 51 || code === 53 || code === 55) {
        return <img alt="Rain" src={rain}/>
    } else if (code === 56 || code === 57) {
        return <img alt="Rain" src={rain}/>
    } else if (code === 61 || code === 63 || code === 65) {
        return <img alt="Rain" src={rain}/>
    } else if (code === 66 || code === 67) {
        return <img alt="Rain" src={rain}/>
    } else if (code === 71 || code === 73 || code === 75) {
        return <img alt="Snow" src={snow}/>
    } else if (code === 77) {
        return <img alt="Snow" src={snow}/>
    } else if (code === 80 || code === 81 || code === 82) {
        return <img alt="Rain" src={rain}/>
    } else if (code === 85 || code === 86) {
        return <img alt="Snow" src={snow}/>
    } else if (code === 95) {
        return <img alt="Thunder" src={thunder}/>
    } else if (code === 96 || 99) {
        return <img alt="Thunder" src={thunder}/>
    }
}

export default WeatherImageHelper;