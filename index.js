import express from 'express'
import cors from 'cors'
import getHistory from "./src/routes/getHistory.js";
const app = express();

const port = 8080
app.use(cors('*'))

app.use('/api/getHistory', getHistory)

app.listen(port, () => {
    console.log('Сервер запущен на порту ' + port);
});

