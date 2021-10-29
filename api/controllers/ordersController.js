const { usersModel, ordersModel } = require('../../models/index');

const postOrders = async (req, res, next) => {

    const data = req.body;

    const findUser = await usersModel.findOne({
        where: {
            userEmail: data.user.email
        }
    });

    let user;
    
    if (!findUser) {
        
        user  = await usersModel.create({
            userName: data.user.name,
            userEmail: data.user.email
        });
    } else {

        user = findUser;
    };

    try {

        const orderDataMap = data.data.map(async item => {

            const order = await ordersModel.create({

                userId: user.id,
                productId: item.id,
                productVendor: item.vendor,
                orderPrice: item.price
            });
        });

        res.status(200).send('Order created successfully');

    } catch(error) {

        res.status(400).send(error);
    }
}

module.exports = {
    postOrders
};