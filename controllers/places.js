const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/places/:id', (req, res) => {
    res.render('/places/:id')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.picture) {
        //default image if one is not provided
        req.body.picture = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    res.push(req.body)
    res.redirect('/places')
})
//More code here in a moment

module.exports = router