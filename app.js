const express = require('express')
const app = express()

app.set('view engine','hbs')

function formatDate(date) {
    return new Date(date).toLocaleString("vi-VN")
}
app.get('/',(req,res)=>{
    var td = new Date().toISOString()
    res.render('index',{now:formatDate(td)})
})
app.get('/help',(req,res)=>{
    res.render('help')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('server is running! :' + PORT)