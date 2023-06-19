const express = require('express')
const app = express();
const cors = require('cors')
const port = 8000;
app.use(cors())

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true}))

const AuthorRoutes = require("./routes/authors.routes")
AuthorRoutes(app)
    
app.listen(port, () => {console.log(`Listening at http://localhost:${port}`)});
