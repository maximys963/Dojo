import { GET_WEATHER_FORECAST } from "../actionTypes/weatherTypes";

export function getWeatherData(){
    return({
        type: GET_WEATHER_FORECAST
    })
}
