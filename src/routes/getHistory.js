export default (req, res) => {
    const data = [
        {
            date: new Date('03.05.2024'),
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '2534',
            type: 'buy',
            status: 'success',
            id: 1
        },
        {
            date: new Date('03.05.2024'),
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '32453',
            type: 'buy',
            status: 'reject',
            id: 2
        },
        {
            date: new Date('03.06.2024'),
            fullName: "Адылова Асем Кубанычбековна",
            sum: '3453',
            type: 'buy',
            status: 'pending',
            id: 3
        },
        {
            date: new Date('03.06.2024'),
            fullName: "Иван Иванов Иванович",
            sum: '252437',
            type: 'subscribe',
            status: 'pending',
            id: 4
        },
        {
            date: new Date('03.07.2024'),
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '253276',
            type: 'comeback',
            status: 'success',
            id: 5
        },
        {
            date: new Date('03.07.2024'),
            fullName: "Адылова Асем Кубанычбековна",
            sum: '13456',
            type: 'subscribe',
            status: 'reject',
            id: 6
        },
        {
            date: new Date('03.08.2024'),
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '554543',
            type: 'subscribe',
            status: 'success',
            id: 7
        },
        {
            date: new Date('03.08.2024'),
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '146363',
            type: 'buy',
            status: 'pending',
            id: 8
        },
        {
            date: new Date('03.09.2024'),
            fullName: "Адылова Асем Кубанычбековна",
            sum: '101300',
            type: 'comeback',
            status: 'reject',
            id: 9
        },
        {
            date: new Date('03.09.2024'),
            fullName: "Мустафаева Аружан Байсебековна",
            sum: '501300',
            type: 'buy',
            status: 'reject',
            id: 10
        },
        {
            date: new Date('04.10.2024'),
            fullName: "Мустафаев Бауыржан Байсебекович",
            sum: '601300',
            type: 'buy',
            status: 'pending',
            id: 11
        },
        {
            date: new Date('05.10.2024'),
            fullName: "Адылова Асем Кубанычбековна",
            sum: '21300',
            type: 'subscribe',
            status: 'reject',
            id: 12
        },
    ]
    res.send(JSON.stringify(data))
}