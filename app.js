const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad.',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then({

//         }
//     };

// clima.getClima(1, 1)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const latLng = await lugar.getLugarLatLng(direccion);
        const climaLugar = await clima.getClima(latLng.lat, latLng.lng);
        return `El clima de ${ direccion } es de ${ climaLugar } `;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)