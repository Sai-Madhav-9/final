const homeController = require('../app/http/controllers/homeController')
const joinController = require('../app/http/controllers/joinController')
const alljoinController = require('../app/http/controllers/alljoinController')
const offersController = require('../app/http/controllers/offersController')
const alloffersController = require('../app/http/controllers/alloffersController')
const recipeController = require('../app/http/controllers/recipeController')
const allrecipeController = require('../app/http/controllers/allrecipeController')
const feedbackController = require('../app/http/controllers/feedbackController')
const allfeedbackController = require('../app/http/controllers/allfeedbackController')
const allorderController = require('../app/http/controllers/allorderController')
const menuController = require('../app/http/controllers/menuController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

// Middlewares 
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/join-Our-Chain', joinController().index)
    app.post('/join-Our-Chain', joinController().postJoin)

    app.get('/alljoin', alljoinController().index)

    app.get('/feedback',feedbackController().index)
    app.post('/feedback',feedbackController().postFeedback)

    app.get('/allfeedback',allfeedbackController().index)
    app.get('/allorder',allorderController().index)
    
    app.get('/recipe',recipeController().index)
    app.post('/recipe',recipeController().postRecipe)

    app.get('/allrecipe',allrecipeController().index)

    app.get('/set-offers',offersController().index)
    app.post('/set-offers',offersController().postOffer)

    app.get('/alloffers',alloffersController().index)

    app.get('/menu',menuController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)

    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.post('/clear-cart', orderController().clear)
    
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    //cancel order
    app.get('/customer/orders/cancel/:id', auth, orderController().cancelOrder)

    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports = initRoutes

