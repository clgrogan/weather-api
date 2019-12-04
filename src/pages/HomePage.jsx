import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const HomePage = () => {
  const [weatherData, setWeatherData] = useState()
  // Perform API call
  const getWeatherDataFromAPI = async () => {
    // debugger
    // const apiURL =
    // 'https://api.openweathermap.org/data/2.5/weather?q=' +
    // inputValue +
    // ',us&units=imperial&appid=bdb29d22e5632a99066f7973fed663ad'
    console.log('Calling API')
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/weather?q=33615,us&units=imperial&appid=bdb29d22e5632a99066f7973fed663ad'
    const resp = await axios.get(apiUrl)
    // setWeatherData(resp.data)
    console.log('back from API, maybe')
  }

  //Execute on render
  useEffect(() => {
    getWeatherDataFromAPI()
  }, [])

  return (
    <>
      <Header />

      <main>
        <p>Stuff here!{weatherData}</p>
      </main>
    </>
  )
}

export default HomePage
