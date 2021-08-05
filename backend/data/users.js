
 import bcript  from "bcryptjs"


const users = [
    {
     name : "Admin User",
     email : "admin@example.com",
     password : bcript.hashSync("123456",10) ,
     isAdmin : "true"
    },
    {
     name : "Mostafa Elewa",
     email : "Elewa@example.com",
     password : bcript.hashSync("123456",10) ,
     
    },
    {
     name : "Radwa Mamdouh",
     email : "Radwa@example.com",
     password : bcript.hashSync("123456",10) ,
    },
    {
     name : "Mostafa Ahmed",
     email : "Mostafa@example.com",
     password : bcript.hashSync("123456",10) ,
    },
]

export default users