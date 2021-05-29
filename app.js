import bcrypt from 'bcrypt'
const rawPass = 'qwerty123'
const rawPass2 = 'qwerdddddddddty123'

let salt = "$2b$10$X7.AgHlCHpSwC8ymgNKejO"


const hashPass1 = bcrypt.hashSync(rawPass, salt)
const hashPass2 = bcrypt.hashSync(rawPass2, salt)

console.log(hashPass1);
console.log(hashPass2);
