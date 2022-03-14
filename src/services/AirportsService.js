import axios from 'axios'

const AIRPORTS_REST_API_URL = 'http://localhost:8080/api/airports';

class AirportsService {

    getAirports(){
        return axios.get(AIRPORTS_REST_API_URL);
    }
}

export default new AirportsService()