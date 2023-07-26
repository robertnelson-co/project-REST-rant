const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'Full Bloom Coffee',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Sandwiches and pastries',
        picture: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    }, {
        name: 'Lidl',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Grocery, bakery',
        picture: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    }]
    res.render('places/index', { places })
})
//More code here in a moment

module.exports = router