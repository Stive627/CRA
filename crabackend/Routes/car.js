const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest:'/public/cars'})
const car = require('../Controller/car')

router.post('/add', upload.single('car'), car.add)
router.get('/edit', )
router.put('/update', )
router.delete('/delete', )

module.exports = router