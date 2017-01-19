import request from 'superagent/lib/client';

//API Call to JSON PLACEHOLDER DATA - CHANGE URL PARAMS IN AppActions.js

export default {
  getContacts: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, response) => {
          if(err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  }
}
