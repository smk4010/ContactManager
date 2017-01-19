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
  },
  saveContact: (url, contact) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(contact)
        .end((err, response) => {
          if(err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  },
  deleteContact: (url) => {
    return new Promise((resolve, reject) => {
      request
        .delete(url)
        .end((err, response) => {
          if(err) reject(err);
          resolve(JSON.parse(response.text));
        })
    });
  }
}
