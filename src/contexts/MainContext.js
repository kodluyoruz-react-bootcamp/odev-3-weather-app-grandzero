import {useState, useEffect, createContext} from 'react';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import lessRainy from '../images/lessRainy.png';
import rainy from '../images/rainy.png';
import heavyRain from '../images/heavyRain.png';
import snowy from '../images/snowy.png';
import sis from '../images/sis.png';
import axios from 'axios';
const icons = {
    sunny,
    cloudy,
    lessRainy,
    rainy,
    heavyRain,
    snowy,
    sis
}

const MainContext = createContext(null);
const initCity = localStorage.getItem("city");
const day = new Date();
// City
// Long
// Lat

//01d => sunny
// 02d.png => cloud with sun
// 03d.png => cloudy
// 09d.png => rainy
// 10d.png => rainy
// 11d.png => heavy rainy
// 13d.png => snow
// 50d.png => windy


export const MainProvider = ({children}) => {
    const [city,setCity] = useState(initCity || "İstanbul");
    
    const [loading,setLoading] = useState(true);
    const [cityList, setCityList] = useState([]); 
    useEffect(() => {
        //getCity details
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${process.env.REACT_APP_WEATHER_KEY}`)
        .then((res) => {
            let lon = res.data.coord.lon;
            let lat = res.data.coord.lat;
            
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            .then((res) => {
                const newList = res.data.daily.map(item => {
                    let icon;
                    
                    switch (item.weather[0].icon) {
                        case "01d" || "01n":
                            icon = sunny
                            break;
                        case "02d" || "02n":
                            icon = cloudy
                            break;
                        case "03d" || "03n":
                             icon = cloudy
                            break;
                        case "09d" || "09n":
                            icon = lessRainy
                             break;
                        case "10d" || "10n":
                            icon = rainy
                            break;
                        case "11d" || "11n":
                           icon = heavyRain
                            break;
                        case "13d" || "13n":
                            icon = snowy
                            break;
                        case "50d" || "50d":
                             icon = sis
                            break;           
                        default:
                            icon = sunny
                            break;
                    }
                    
                    
                    return {
                    max: parseInt(item.temp.max-272.15),
                    min: parseInt(Math.floor(item.temp.min-272.15)),
                    icon: icon,
                    main: item.weather[0].main
                }});
                
                setCityList(newList);
                setLoading(false);
                
                
            });
        })
    },[]);

    useEffect(() => {
        //getNewCityDetails
        localStorage.setItem("city", city);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
        .then((res) => {
            let lon = res.data.coord.lon;
            let lat = res.data.coord.lat;
            
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            .then((res) => {
                const newList = res.data.daily.map(item => {
                    let icon;
                    
                    switch (item.weather[0].icon) {
                        case "01d" || "01n":
                            icon = sunny
                            break;
                        case "02d" || "02n":
                            icon = cloudy
                            break;
                        case "03d" || "03n":
                             icon = cloudy
                            break;
                        case "09d" || "09n":
                            icon = lessRainy
                             break;
                        case "10d" || "10n":
                            icon = rainy
                            break;
                        case "11d" || "11n":
                           icon = heavyRain
                            break;
                        case "13d" || "13n":
                            icon = snowy
                            break;
                        case "50d" || "50d":
                             icon = sis
                            break;           
                        default:
                            icon = sunny
                            break;
                    }
                    
                    
                    return {
                    max: parseInt(item.temp.max-272.15),
                    min: parseInt(Math.floor(item.temp.min-272.15)),
                    icon: icon,
                    main: item.weather[0].main
                }});
                
                setCityList(newList);
                setLoading(false);
                
                
            });
        })
    },[city]);
    const values = {
        city,
        setCity,
        day,
        loading,
        cityList,
        icons
    };
    useEffect(() => {
        localStorage.setItem("city",city);

        
    },[city]);

    return <MainContext.Provider value={values}>{children}</MainContext.Provider>
}
export default MainContext;

