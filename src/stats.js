const axios = require('axios');

/**
 *
 * @param {*} platform
 * @param {*} player
 */
const getStats = (platform, player) => {
  axios({
    url: `https://api.fortnitetracker.com/v1/profile/${platform}/${player}`,
    headers: { 'TRN-Api-Key': '61fae056-d1f4-4ed2-b20f-39dff98c10a7' },
  })
    .then(res => console.log(res));
};


getStats('xbl', 'BG Watson');

export { getStats };

