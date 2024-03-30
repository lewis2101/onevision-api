import {generate} from "../generate-token.js";

const distanceList = [
    {"from": 1, "to": 2, "value": 1320},
    {"from": 1, "to": 3, "value": 615},
    {"from": 1, "to": 4, "value": 1040},
    {"from": 1, "to": 5, "value": 1550},
    {"from": 1, "to": 6, "value": 300},
    {"from": 1, "to": 7, "value": 1050},
    {"from": 1, "to": 8, "value": 940},
    {"from": 1, "to": 9, "value": 1100},
    {"from": 1, "to": 10, "value": 1780},
    {"from": 2, "to": 3, "value": 1155},
    {"from": 2, "to": 4, "value": 1130},
    {"from": 2, "to": 5, "value": 1435},
    {"from": 2, "to": 6, "value": 940},
    {"from": 2, "to": 7, "value": 1650},
    {"from": 2, "to": 8, "value": 1240},
    {"from": 2, "to": 9, "value": 1510},
    {"from": 2, "to": 10, "value": 2045},
    {"from": 3, "to": 4, "value": 445},
    {"from": 3, "to": 5, "value": 990},
    {"from": 3, "to": 6, "value": 315},
    {"from": 3, "to": 7, "value": 700},
    {"from": 3, "to": 8, "value": 440},
    {"from": 3, "to": 9, "value": 800},
    {"from": 3, "to": 10, "value": 1265},
    {"from": 4, "to": 5, "value": 595},
    {"from": 4, "to": 6, "value": 740},
    {"from": 4, "to": 7, "value": 305},
    {"from": 4, "to": 8, "value": 560},
    {"from": 4, "to": 9, "value": 660},
    {"from": 4, "to": 10, "value": 870},
    {"from": 5, "to": 6, "value": 865},
    {"from": 5, "to": 7, "value": 980},
    {"from": 5, "to": 8, "value": 1050},
    {"from": 5, "to": 9, "value": 1825},
    {"from": 5, "to": 10, "value": 190},
    {"from": 6, "to": 7, "value": 595},
    {"from": 6, "to": 8, "value": 265},
    {"from": 6, "to": 9, "value": 500},
    {"from": 6, "to": 10, "value": 795},
    {"from": 7, "to": 8, "value": 740},
    {"from": 7, "to": 9, "value": 1000},
    {"from": 7, "to": 10, "value": 1030},
    {"from": 8, "to": 9, "value": 490},
    {"from": 8, "to": 10, "value": 1705},
    {"from": 9, "to": 10, "value": 1615}
]

const calculateTime = (dist) => {
    if(dist < 100) return 1440
    if(dist < 499) return 2880
    if(dist > 500) return 5760
}

export default (req, res) => {
    const { from, to } = req.body
    let result = distanceList.find(i => i.from === from && i.to === to)
    if(!result) result = distanceList.find(i => i.from === to && i.to === from)
    const time = calculateTime(result.value)
    res.send({
        distance: result.value,
        time,
        price: time / 60 * result.value
    })
}