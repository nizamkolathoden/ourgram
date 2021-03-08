
const express = require("express");
const app = express()
const dot = require('dotenv');
dot.config({ path: './key.env' })
const port = process.env.PORT || 8000
const cors = require('cors')
const mongoose = require("mongoose")


app.use(cors())
//middle ware
app.use(express.json())
const router = require("./routers/auth")
//maybe; require and using same line of code
app.use(require("./routers/post"))
app.use(require('./routers/user'));
app.use('/settings', require('./routers/settings'));

app.use(router)
require("./models/user")
require("./models/post")
//mongoose conection
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/sample1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//mongoose connection checking
mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
})


mongoose.connection.on("error", (e) => {
    console.log("error", e);
})


//server started
app.listen(port, () => console.log("conected to server:", port));
