const router = require('express').Router()


router.get('/', (req,res) =>{
    let places = [{
        name: 'Full Bloom Coffee',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Sandwiches and pastries',
        picture: 'notfound.com'
    }, {
        name: 'Lidl',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Grocery, bakery',
        picture: 'aldi.us'
    }]
    res.render('places/index', { places })
})
//More code here in a moment

module.exports = router