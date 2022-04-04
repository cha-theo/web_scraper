const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express()
const url = "https://www.theguardian.com/international"


axios(url)
.then(response =>)  16:58 / 23:25

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))