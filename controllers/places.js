const router = require('express').Router()


router.get('/', (req,res) =>{
    let places = [{
        name: 'Full Bloom Coffee',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Sandwiches and pastries',
        picture: 'https://cdn.shopify.com/s/files/1/1140/8954/files/cafe1-1024-400-upstairs_480x480.jpg?v=1631551811'
    }, {
        name: 'Lidl',
        city: 'Garner',
        state: 'North Carolina',
        cuisines: 'Grocery, bakery',
        picture: 'https://media.bizj.us/view/img/12516783/lidlgarnerncexterior97*750xx3945-2216-87-449.jpg'
    }]
    res.render('places/index', { places })
})
//More code here in a moment

module.exports = router