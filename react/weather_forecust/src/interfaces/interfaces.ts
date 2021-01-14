export interface IWeather {
    location: string;
    region: string;
    temperature: number;
    cloudCover: number;
}

export interface IWeatherAction {
    type: string;
    weatherData: IWeather
}
