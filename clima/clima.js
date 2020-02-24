const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8cb4c0799ee30bd9c50a94b491c39416&units=metric`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}