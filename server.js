const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

app.set('port', process.env.PORT || 3001)
app.locals.food = [
    {
        id: 1,
        type: 'marshmallow',
        quantity: 34,
        expired: false
    },
    {
        id: 2,
        type: 'peach',
        quantity: 2,
        expired: false
    },
    {
        id: 3,
        type: 'spinach',
        quantity: 79,
        expired: true
    }
]

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
})

app.get('/', function (request, response) {
    const { food } = app.locals;
    response.json(food);
});