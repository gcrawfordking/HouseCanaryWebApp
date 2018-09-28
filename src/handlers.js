//const request = require('request');
const axios = require('axios');
const url = 'https://cors-anywhere.herokuapp.com/https://api.housecanary.com/v2/';

let handler2 = function(address, zipcode, endpoint) {
	debugger;
	return axios.get(url + endpoint, {
		auth: {
			username: 'gcrawfordking@gmail.com',
			password: 'q56eHqPU'
		},
		params: {
				address: address,
				zipcode: zipcode
			}
	  })
}

export default { handler2 };

