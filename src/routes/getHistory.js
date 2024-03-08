export default (req, res) => {
    const data = [
        {
            date: '05.02.2024',
            sum: '2534',
            type: 'buy',
            status: 'success',
            id: 1
        },
        {
            date: '05.02.2024',
            sum: '32453',
            type: 'buy',
            status: 'reject',
            id: 2
        },
        {
            date: '05.02.2024',
            sum: '3453',
            type: 'buy',
            status: 'pending',
            id: 3
        },
        {
            date: '05.02.2024',
            sum: '252437',
            type: 'subscribe',
            status: 'pending',
            id: 4
        },
        {
            date: '06.02.2024',
            sum: '253276',
            type: 'comeback',
            status: 'success',
            id: 5
        },
        {
            date: '06.02.2024',
            sum: '13456',
            type: 'subscribe',
            status: 'reject',
            id: 6
        },
        {
            date: '06.02.2024',
            sum: '554543',
            type: 'subscribe',
            status: 'success',
            id: 7
        },
        {
            date: '07.02.2024',
            sum: '146363',
            type: 'buy',
            status: 'pending',
            id: 8
        },
        {
            date: '07.02.2024',
            sum: '101300',
            type: 'comeback',
            status: 'reject',
            id: 9
        },
        {
            date: '04.02.2024',
            sum: '501300',
            type: 'buy',
            status: 'reject',
            id: 10
        },
        {
            date: '03.02.2024',
            sum: '601300',
            type: 'buy',
            status: 'pending',
            id: 11
        },
        {
            date: '05.02.2024',
            sum: '21300',
            type: 'subscribe',
            status: 'reject',
            id: 12
        },
    ]
    res.send(JSON.stringify(data))
}