const express = require('express');
let { mean, median, mode, parse } = require('./operations');
const app = express();

app.get('/mean', function (req, res) {
    let nums = Number(req.params.num);
    res.send(`response: {
        operation:mean,
        value: ${mean(nums)}
      }`)
})
app.get('/median', function (req, res) {
    let nums = Number(req.params.num);
    res.send(`response: {
        operation:median,
        value: ${median(nums)}
      }`)
})
app.get('/mode', function (req, res) {
    let numString = req.params.num.split(",");
    let nums = parse(numString);
    res.send(`response: {
        operation:mode,
        value: ${mode(nums)}
      }`)
})

app.listen(3000, () => {
    console.log('App on port 3000')
})