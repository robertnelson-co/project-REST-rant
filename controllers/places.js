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
//More code here in a moment

module.exports = router