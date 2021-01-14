import { GET_WEATHER_FORECAST} from "../actionTypes/weatherTypes";
import { IWeather, IWeatherAction } from "../interfaces/interfaces";

const initialState: IWeather = {
    location: 'Boguslav',
    region: 'Kiev Region',
    temperature: 20,
    cloudCover: 40
}

export const mainReducer = (state = initialState, action: IWeatherAction): IWeather =>{
    switch (action.type){
        case GET_WEATHER_FORECAST:
            return state
        default:
            return state;
    }
};
