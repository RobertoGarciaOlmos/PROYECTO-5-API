const crypto= require ('crypto');
const salt = 'gh1';


const encriptar = (password) => {
    return crypto.pbkdf2Sync(password, salt,1000,251,'sha512').toString('hex')
}
console.log(encriptar("Hola1"))

const contraseña ='40f801475b8892139deebcf91c95ff9d8a1f9ec00c7021fb03aa07c51d23585f78be319286a18436ab552dee9212448fadb4d6cc15dbc282acefb1c85828352f21191a43a9548d6dd2b118bde7fcb9a821a7532ad5c36616c25e83abdea808367bf0b7741186aaabaf4811f4e4eb2007d95cb48bb12ef1776bb6e049ed3eec4df5b0b9194ead4c48c6c704b8e815cbff691d72f62c157744bc685f74226b6b06b39f3a8598eaed5f649b9abe842c9f3b3906db5183cdebb07982e23ffe036390e26817c6e48429a0d238aa177f62bf8c4ec809f9904bd38cd7ee3e1b647ccac1bc241a65ea92e25e4d26a99083f486b0de5ffdfed2d4c4bfd13215'

console.log(
    encriptar("Hola1")==contraseña
    ? "Contraseña correcta"
    : "Contraseña incorrecta"
);