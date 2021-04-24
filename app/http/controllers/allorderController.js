const Order = require('../../models/order')
function allorderController(){
    return {
        async index(req,res){
            const orders= await Order.find()
            // console.log(foods)
            return res.render("allorder", { orders: orders})
        }
    }
}


module.exports = allorderController