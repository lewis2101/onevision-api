import {generate} from "./generate-token.js";

export default (req, res) => {
    if(!req.headers.token) return res.status(403).send({ type: 'AUTH_REQUIRED' })
    if(!req.headers.token.includes('Bearer_')) return res.status(403).send({ type: 'AUTH_REQUIRED' })
    const data = [
        {
            date: '03.02.2024',
            fullName: "Пушкин Александр Сергеевич",
            sum: '123102',
            type: 'subscribe',
            status: 'success',
            id: 23
        },
        {
            date: '03.02.2024',
            fullName: "Мартай Сымбат Ерболкызы",
            sum: '4423',
            type: 'comeback',
            status: 'reject',
            id: 1235123
        },
        {
            date: '03.01.2024',
            fullName: "Мартай Сымбат Ерболкызы",
            sum: '423402',
            type: 'buy',
            status: 'success',
            id: 123510
        },
        {
            date: '03.08.2024',
            fullName: "Атабекова Диана Кайсаркызы",
            sum: '43400',
            type: 'subscribe',
            status: 'reject',
            id: 12357
        },
        {
            date: '03.10.2024',
            fullName: "Атабекова Диана Кайсаркызы",
            sum: '45302',
            type: 'buy',
            status: 'success',
            id: 12355
        },
        {
            date: '03.20.2024',
            fullName: "Бексултанова Нуржан Байгожаевна",
            sum: '125125',
            type: 'buy',
            status: 'success',
            id: 1441
        },
        {
            date: '02.25.2024',
            fullName: "Бексултанова Нуржан Байгожаевна",
            sum: '23425',
            type: 'comeback',
            status: 'pending',
            id: 2349
        },
        {
            date: '03.05.2024',
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '2534',
            type: 'buy',
            status: 'success',
            id: 1
        },
        {
            date: '03.05.2024',
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '32453',
            type: 'buy',
            status: 'reject',
            id: 2
        },
        {
            date: '03.06.2024',
            fullName: "Адылова Асем Кубанычбековна",
            sum: '3453',
            type: 'buy',
            status: 'pending',
            id: 3
        },
        {
            date: '03.06.2024',
            fullName: "Иван Иванов Иванович",
            sum: '252437',
            type: 'subscribe',
            status: 'pending',
            id: 4
        },
        {
            date: '03.07.2024',
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '253276',
            type: 'comeback',
            status: 'success',
            id: 5
        },
        {
            date: '03.07.2024',
            fullName: "Адылова Асем Кубанычбековна",
            sum: '13456',
            type: 'subscribe',
            status: 'reject',
            id: 6
        },
        {
            date: '03.08.2024',
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '554543',
            type: 'subscribe',
            status: 'success',
            id: 7
        },
        {
            date: '03.08.2024',
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '146363',
            type: 'buy',
            status: 'pending',
            id: 8
        },
        {
            date: '03.09.2024',
            fullName: "Адылова Асем Кубанычбековна",
            sum: '101300',
            type: 'comeback',
            status: 'reject',
            id: 9
        },
        {
            date: '03.09.2024',
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '501300',
            type: 'buy',
            status: 'reject',
            id: 10
        },
        {
            date: '03.10.2024',
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '601300',
            type: 'buy',
            status: 'pending',
            id: 11
        },
        {
            date: '03.11.2024',
            fullName: "Адылова Асем Кубанычбековна",
            sum: '21300',
            type: 'subscribe',
            status: 'reject',
            id: 12
        },
    ]
    res.send(JSON.stringify(data))
}