import './style.css'
import { searchWeather } from './weather_api'

const searchBtn = document.querySelector('.searchBtn')
searchBtn.addEventListener('click', searchWeather)