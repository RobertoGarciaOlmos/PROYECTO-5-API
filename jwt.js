const jwt= require ('jsonwebtoken');
const secret= 'mysecret';

const generarToken = (payload)  => {
    return jwt.sign(
payload,
     secret
    )
} 

verificarToken =(token) =>{
return jwt.verify(token,secret)};

// console.log(generarToken({
//     userType: 'admin',
//     userId: '5' }));  

    console.log (verificarToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwidXNlcklkIjoiNSIsImlhdCI6MTY2Njk5Mzg0OX0.lo6qlEF8lpsG_gvpf4VLx-Rrsptrdyz9Tw9PCrSjPO8'));
