import User from '../model/UserModel.js';

export const createUser =async(req, res, next)=>{
    try {
        const {name, email, createdAt} = req.body;
        const newUser = new User({name, email, createdAt});
        if(!newUser){
            return console.log("No user");
        }
        await newUser.save();
        res.status(201).json({Message:'New user is created successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getAllUsers=async(req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}