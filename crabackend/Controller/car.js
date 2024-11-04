const multer = require('multer')
const db = require('../DB/db')

exports.add = function(req, res){
    if(req.file && req.body.name && req.body.model &&  req.body.color & req.body.energy_consumption && req.body.mode_of_operation){
        db.none('insert into cars(name, url, model, created_at, color, energy_consumption, mode_of_operation) values(${name}, ${url}, ${model}, NOW(), ${color}, ${energy_consumption}, ${mode_of_operation})',{
           name:req.body.name,
           url: 'http://localhost:3001/' + req.file.path,
           model:req.body.model,
           color:req.body.color,
           energy_consumption:req.body.energy_consumption,
           mode_of_operation:req.body.mode_of_operation,
        })
        .then(() => console.log('The data are inserted successfully'))
        .catch((err) => {res.json({message:'An error occured', err}); console.log('An error occured', err)})
    }
    return res.send('The fields are missing.')
}