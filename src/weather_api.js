const searchWeather = (e) => {
    e.preventDefault()
    getForm()
    
}

const getForm = () => {
    const form = document.querySelector('#weatherForm')
    const newForm = new FormData(form)
    console.log(newForm)

    const location = newForm.get('location')
    console.log(location)
}

const getWeather = (e) => {
    let apiKey = '8acef1b548b38b692c483493afd63149'
    
}

export {searchWeather}