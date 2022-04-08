const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const {
  response
} = require('express');
const express = require('express');

const app = express()
const url = "https://www.tripadvisor.com.gr/Restaurant_Review-g189473-d1074569-Reviews-Giannoula-Thessaloniki_Thessaloniki_Region_Central_Macedonia.html"


axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    
    $('.reviewSelector', html).each(function(){
      const title = $(this).find('.noQuotes').text()
      const content = $(this).find('.partial_entry').text()
      const date = $(this).find('.prw_reviews_stay_date_hsx').text()
      articles.push({
        title,
        content,
        date
      })
    })
    console.log(articles)
  }).catch(err => console.log(err))




app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))