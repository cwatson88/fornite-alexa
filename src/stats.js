
import axios from 'axios';

const config = {
  headers: {
    'trn-api-key': '61fae056-d1f4-4ed2-b20f-39dff98c10a7',
    'Access-Control-Allow-Origin': '*',
  },
};

const wins = axios.get('https://api.fortnitetracker.com/v1/profile/xbl/bg%20watson', config)
  .then(res => res.data.lifeTimeStats.find(result => result.key === 'Wins').value);

wins.then(res => console.log(res));
