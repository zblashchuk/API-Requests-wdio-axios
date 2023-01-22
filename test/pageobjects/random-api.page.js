import Page from './page.js';
import axios from 'axios';
//\\\\const axios = require('axios');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RandomApiPage extends Page {
    async getRandomJoke(){
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      return response;
    }
    async postLogin(){
       const url = 'https://rapidapi.com/learn/api/rest';
	const data = { firstName: 'John', secondName: 'Doe', email: 'jd@gmail.com' };
	// Specifying headers in the config object
	const config =  { 'content-type': 'application/json' };
	const response1 = await axios.post(url, data, config);
      return (response1);
    }
  }

export default new RandomApiPage();

