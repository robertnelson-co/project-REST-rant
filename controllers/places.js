const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    let places = [{
        name: 'Barcelona Wine Bar',
        city: 'Raleigh',
        state: 'North Carolina',
        cuisines: 'Iberian Food',
        picture: '/images/BarcelonaWB.jpg'
    }, {
        name: 'Madre',
        city: 'Raleigh',
        state: 'North Carolina',
        cuisines: 'Mediterranean',
        picture: '/images/Madre.jpg'
    }]
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
    places.push(req.body)
    res.redirect('/places')
})
//More code here in a moment

module.exports = router