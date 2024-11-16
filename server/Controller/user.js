const bcrypt = require('bcrypt')
const db = require('../DB/db')

exports.register = function(req, res){
    if(req.body){
        if(req.body.username && req.body.email && req.body.password){
            bcrypt.hash(req.body.password,10)
            .then((hash) =>{
                db.none('insert into users(username, email, password) values(${username}, ${email}, ${password})',{
                    username:req.body.username,
                    email: req.body.email,
                    password: hash
                })
                .then(()=>{res.status(201).json({message:'sucessfull inserting of data' + req.body}); console.log(req.body)})
                .catch((error) =>{res.status(400).json({message:'we got an error while inserting\n'+ error});console.log('we got an error while inserting\n',error)})

            })
            .catch((error) =>{res.status(400).json({message:'An error occured while hashing password.\n' + error});console.log('An error occured while hashing password.\n' + error)})

        }
        else{
            res.status(400).json({message:'The field values are missing'})
        }
    }
    else{
        res.status(400).json({message:'No data found.'})
    }
}

exports.login = function(req, res){
    db.query('select * from users where username = ${usernameoremail} or email = ${usernameoremail} ', {usernameoremail:req.body.usernameoremail})
    .then((user) =>{
        if(user){  
            bcrypt.compare(req.body.password, user[0].password)
            .then((val) =>{
                if(val) return res.status(200).json({message:'Log in successfully.',})
                return res.status(401).json({message:'Invalid username or password.'})
            })
            .catch((err) =>{res.status(500).json({message:'Something get wrong.' + err}) ;console.log('Something wrong, ', err)})

        }
        else return res.status(401).json({message:'Invalid username or password.'})
         })
    .catch((error)=> {res.status(500).json({message:`An error occurred while trying to log in.\n ${error}`}); console.log('An error occured' + error)})

}
