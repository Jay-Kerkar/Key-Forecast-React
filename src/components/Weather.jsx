import React, { useState } from 'react'
import '../resources/style.css'
import WeatherCard from './WeatherCard'

const Weather = (props) => {
    const [query, setQuery] = useState("")
    const [forecast, setForecast] = useState({ temperature: "", weather: "", city: "", country: "", pressure: "", humidity: "", speed: "", sunrise: "", sunset: "" })

    const setValue = (event) => {
        setQuery(event.target.value)
    }

    const search = async () => {
        props.setProgress(25)
        const weatherForecast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=7e6608c5b9056461bbf1f7463c1caf92`)
        props.setProgress(50)
        const data = await weatherForecast.json()
        props.setProgress(75)
        setForecast({
            temperature: data.main.temp,
            weather: data.weather[0].main,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            speed: data.wind.speed,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        })
        props.setProgress(100)
        setQuery("")
    }
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="Search..." value={query} autoFocus id="search" name="search" className="searchTerm" onChange={setValue} style={{ height: "40px" }} />
                    <button className="searchButton" type="button" onClick={search} style={{ height: "40px" }}>Search</button>
                </div>
            </div>
            <WeatherCard forecast={forecast} />
        </>
    )
}

export default Weather