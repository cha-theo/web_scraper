const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const {
  response
} = require('express');
const express = require('express');

const app = express()
const url = "https://www.gazzetta.gr/teams/olympiakos"


axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    
    $('.list-article__info', html).each(function(){
      const title = $(this).find('.link-overall').text()
      const url = $(this).find('.link-overall').attr('href')
      const img = $(this).attr('picture') //DOC cheerio to fetch image
      articles.push({
        title,
        url,
        img
      })
    })
    console.log(articles)
  }).catch(err => console.log(err))




app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))