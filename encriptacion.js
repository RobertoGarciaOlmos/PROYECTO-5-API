const crypto= require ('crypto');
const salt = 'gh1';


const encriptar = (password) => {
    return crypto.pbkdf2Sync(password, salt,1000,251,'sha512').toString('hex')
}
console.log(encriptar("Hola1"))



console.log(
    encriptar("Hola1")==contraseña
    ? "Contraseña correcta"
    : "Contraseña incorrecta"
);