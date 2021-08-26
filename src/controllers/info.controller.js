const httpStatus = require('http-status');
const axios = require('axios');
const catchAsync = require('../utils/catchAsync');
const moment = require('moment');


const getNews = catchAsync(async (req, res) => {
  let keyword = req.body.search
  let url = `https://newsapi.org/v2/top-headlines?`
  if (keyword) {
    url += `q=${keyword}&`
  }
  else {
    url += `language=en&`
  }
  url += `apiKey=${process.env.NEWS_API_KEY}`
  let response = await axios.get(url)
  let result = []
  if (response && response.data && response.data.articles && response.data.articles.length) {
    response.data.articles.map((e) => {
      result.push({ headline: e.title, link: e.url })
    })
  }
  res.status(httpStatus.CREATED).send({ count: result.length, data: result, message: "News retrieved successfully!"});
});

const getWeather = catchAsync(async (req, res) => {
  let keyword = req.body.search
  let url = `http://api.openweathermap.org/data/2.5/forecast?`
  if (keyword) {
    url += `q=${keyword}&`
  }
  else {
    url += `q=London&`
  }
  url += `appid=${process.env.WEATHER_API_KEY}`
  let response = await axios.get(url)
  let result = []
  if (response && response.data && response.data.list && response.data.list.length) {
    response.data.list.map((e) => {
      result.push({ Date: moment(new Date(e.dt_txt)).toString(), main: e.weather[0].main ,temp: e.main.temp})
    })
  }
  res.status(httpStatus.CREATED).send({ count: result.length, data: result,  message: "Weather retrieved successfully!" });
});


module.exports = {
  getNews,
  getWeather,
};
