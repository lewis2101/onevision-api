export default (req, res) => {
    if(!req.headers.token) return res.status(403).send({ type: 'AUTH_REQUIRED' })
    if(!req.headers.token.includes('Bearer_')) return res.status(403).send({ type: 'AUTH_REQUIRED' })
    return res.status(200).send()
}