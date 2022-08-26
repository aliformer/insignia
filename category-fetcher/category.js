const axios = require('axios');
const http = require('http');
const https = require('https');
const fs = require('fs');

const axiosScrape = (url, options = {}) =>
  new Promise((resolve, reject) => {
    // const { CancelToken } = axios;
    // const source = CancelToken.source();
    // const timeoutId = setTimeout(() => {
    //   source.cancel(message || 'The request was aborted by user.');
    // }, timeout);
    axios({
      url,
      ...options,
      validateStatus: false,
    }).then(
      response => {

        console.log(response.status);
        resolve(response);
      },
      async err => {

        reject(new Error(err.message));
      },
    );
  });
// const scraping = async () => {
//         console.log('am i here')
//         const response = await client.get("").then(res => {
//             return res.data;
//         }).catch(err => {console.log(err)});
//         console.log(response)

// }


axiosScrape("https://www.blibli.com/backend/search/products?sort=&page=1&start=0&searchTerm=tas&intent=true&merchantSearch=true&multiCategory=true&customUrl=&&channelId=web&facetOnly=true")