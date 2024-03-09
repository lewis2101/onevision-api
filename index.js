import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import getHistory from "./src/routes/getHistory.js";
import postAuth from "./src/routes/postAuth.js";
import checkAuth from "./src/routes/checkAuth.js";
const app = express();

const port = 8080
app.use(cors('*'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/getHistory', getHistory)
app.use('/api/auth', postAuth)
app.use('/api/check', checkAuth)

app.listen(port, () => {
    console.log('Сервер запущен на порту ' + port);
});

