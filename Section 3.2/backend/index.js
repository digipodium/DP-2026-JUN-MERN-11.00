const express = require('express');
const ProductRouter = require('./routers/productRouter');
const UserRouter = require('./routers/userRouter');
require('./connection');

const cors = require('cors');

// initialize express for starting the server
const app = express();

const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/product', ProductRouter);
app.use('/user', UserRouter);

// endpoint to accept request on index route (/)
app.get('/', (req, res) => {
    res.send('response from express');
});

// endpoint to accept request on add route (/add)
app.get('/add', (req, res) => {
    res.send('response from add');
})

// getall
// delete

// start the server
app.listen(port, () => {
    // these statement will run after the server has started
    console.log('server started');
});