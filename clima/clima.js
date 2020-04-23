const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=202b279e1fde469ab23b3d11f30ec3f9&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}