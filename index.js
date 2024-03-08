import express from 'express'
import cors from 'cors'
import getHistory from "./src/routes/getHistory.js";
const app = express();

app.use(cors('*'))

app.use('/api/getHistory', getHistory)

app.listen(8080, () => {
    console.log('Сервер запущен на порту 3000');
});

