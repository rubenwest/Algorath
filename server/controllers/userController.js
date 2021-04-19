const User = require('../models/User');

async function addUser(req, res) {
    
    try {

        let body = req.body;
        let user = new User({
          name: body.name,
          rol: body.rol,
          department: body.department
        });
      
        const userStored = await user.save();
        res.status(201).send({userStored})

    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

async function getUsers(req, res) {
    const users = await User.find().lean().exec()
    res.status(200).send({users})
}

module.exports = {
    addUser,
    getUsers
}