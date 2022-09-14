const searchWeather = (e) => {
    e.preventDefault()
    getForm()
    
}

const getForm = () => {
    const form = document.querySelector('#weatherForm')
    const newForm = new FormData(form)
    console.log(newForm)
    getWeather(newForm)
    form.reset()
}

const getGiphy = async (value) => {
    try {
        const giphyImg = document.querySelector('#giphyImg')
        giphyImg.src = './svgs/images/loading.jpg'
        
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=A7gw5fRG28YESPVKnvhZwx5uJRccvgf7&s=${value}`)
        const data = await response.json()
        
        giphyImg.src = data.data.images.original.url
        
    } catch (err){
        console.error(err)
    }
}

const getWeatherDisplay = async(value) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=A7gw5fRG28YESPVKnvhZwx5uJRccvgf7&s=${value} weather`)
        const data = await response.json()
        const giphyImg = document.querySelector('.iconDisplay')
        giphyImg.src = data.data.images.original.url
    } catch (err){
        console.log(err)
    }
}

const getWeather = async (e) => {
    let apiKey = '8acef1b548b38b692c483493afd63149'
    let location = e.get('location')
    let tempUnit
    let unitString
    
    if (e.get('tempDisplay') == 'Celsius'){
        tempUnit = 'metric'
        unitString = '°C'
    } else if (e.get('tempDisplay') == 'Fahrenheit'){
        tempUnit = 'imperial'
        unitString = '°F'
    }
    const locationTitle = document.querySelector('.locationTitle')
    const iconDisplay = document.querySelector('.iconDisplay')
    const weatherD = document.querySelector('.weatherD')
    const temperatureDisplay = document.querySelector('.temperatureDisplay')
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${tempUnit}&APPID=${apiKey}`)
        const data = await response.json()
        console.log(data)
        locationTitle.textContent = `${location[0].toUpperCase() + location.substring(1)}`
        temperatureDisplay.textContent = `${data.main.temp}${unitString}`
        weatherD.textContent = `${data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}`
        
        getGiphy(location)
        getWeatherDisplay(`${data.weather[0].description}`)
    } catch (err){
        console.error('Error', err)
        getGiphy('Not found')
        locationTitle.textContent = 'PLACE NOT FOUND'
        temperatureDisplay.textContent = ''
        weatherD.textContent = ''
        iconDisplay.src = ''
    }
    
    
}

export {searchWeather}