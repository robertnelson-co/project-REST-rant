const router = require('express').Router()


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
    res.send('POST /places')
})
//More code here in a moment

module.exports = router