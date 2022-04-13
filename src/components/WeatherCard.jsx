import React, { useState, useEffect } from 'react'

const WeatherCard = (props) => {
    const { temperature, weather, city, country, humidity, speed, sunrise, sunset } = props.forecast
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (weather) {
            switch (weather) {
                case "Clouds":
                    setStatus("wi-day-cloudy");
                    break;
                case "Haze":
                    setStatus("wi-fog");
                    break;
                case "Clear":
                    setStatus("wi-day-sunny");
                    break;
                case "Mist":
                    setStatus("wi-dust");
                    break;
                case "Rain":
                    setStatus("wi-rain");
                    break;
                default:
                    setStatus("wi-day-sunny");
                    break;
            }
        }
    }, [weather])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateObject = new Date()
    let month = months[dateObject.getMonth()]
    let time = `${dateObject.getHours()}:${dateObject.getMinutes()}`
    let date = `${dateObject.getDate()} ${month} ${dateObject.getFullYear()}`
    let rise = new Date(sunrise * 1000)
    let set = new Date(sunset * 1000)
    let sunriseTime = `${rise.getHours()}:${rise.getMinutes()}`
    let sunsetTime = `${set.getHours()}:${set.getMinutes()}`
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={status} style={{ marginTop: "15px" }}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span style={{ fontSize: "33px", marginLeft: "40px" }}>{Math.round(temperature - 273.15)} &deg;C</span>
                    </div>
                    <div className="description text-center">
                        <div className="weatherCondition">{weather}</div>
                        <div className="place">{city}, {country}</div>
                    </div>
                </div>
                <div className="date d-grid"><span className="time" style={{ fonstSize: "50px" }}>{time}</span><span style={{ fontSize: "30px" }}>{date}</span></div>
                <div className="extra-temp">
                    <div className="temp-info-minmax" style={{ marginTop: "10px" }}>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {sunriseTime} AM
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {sunsetTime} PM
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info" style={{ marginTop: "10px" }}>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} m/s
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} %
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard