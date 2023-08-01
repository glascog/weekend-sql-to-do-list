const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Setup body parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js) from the server/public folder
app.use(express.static('server/public'));

// Set up the task router to respond to requests from the `/tasks` URL
let taskRouter = require('./routes/task.router');
app.use('/tasks', taskRouter);
// require(dotenv).config()

// Start express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});

