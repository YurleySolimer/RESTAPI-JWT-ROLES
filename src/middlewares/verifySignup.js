 import { ROLES } from '../models/Roles.models'
 import User from '../models/Users.models'

 export const checkDuplicateUserOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'The user already exists'})

    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).json({message: 'The email already exists'})
 }

 export const checkRolesExisted = (req, res, next) => {
     if (req.body.roles) {
         for(let i = 0; i < req.body.body.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exists`
                })
            } 
         }
     }

     next()
 }