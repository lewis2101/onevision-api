export const generate = () => {
    let token = Date.now().toString() + Date.now().toString().split('').reverse().join('')
    token = token.split('').map(i => i * 30  + 2).join('')
    return token
}