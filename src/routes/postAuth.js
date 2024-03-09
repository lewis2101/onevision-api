import {generate} from "./generate-token.js";

export default (req, res) => {
    if(req.body.userName === 'admin' && req.body.password === 'admin') {
        const token = generate()
        res.send({ token: `Bearer_${token}` })
    }
    res.status(403).send()
}