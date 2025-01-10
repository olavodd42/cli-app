const cheerio = require('cheerio');
const {readFileSync} = require('fs')
const express = require('express')
const app = express()

const buffer = readFileSync('./public/index.html')

const $ = cheerio.loadBuffer(buffer)
const p = $('main').find($('p'))
p.text('hello world')
//console.log(p.text())

const a = $('.button')
console.log(a.text())
console.log(a.attr('href'))
a.attr('href', 'https://www.google.com')

console.log(a.attr('href'))

app.get('/', (req, res)=>{
    res.send($.html())
})

app.listen(8080, ()=>{
    console.log('Server listen on http://localhost:8080')
})