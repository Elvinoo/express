const { response } = require('express');
const express = require('express')
const app = express();

const workers = [{
    id: "samAhm87",
    name: "Samir",
    age: "36"
},
{
    id: "faHu87",
    name: "Fakhri",
    age: "35"
},
{
    id: "abuJaf31",
    name: "Abuzar",
    age: "31"
}
]
app.get('/', function (request, response) {
    response.send({ workers })
})

app.listen(3000, function () {
    console.log('Succesfully joined to the server on host 3000!!!')
})