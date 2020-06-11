// web server setup
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
// import Cow model
const Cow = require('./db/db');



app.listen(port, () => console.log(`Server is running on port ${port}`));