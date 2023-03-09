// create an express server
const express = require('express');
const app = express();

// declare the port from the environment
const port = process.env.PORT || 5000;

// create a basic route that returns Doctor is easy whale icon
app.get('/', (req, res) => {

    res.send('Docker is easy 🐋');

});


// run the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);



