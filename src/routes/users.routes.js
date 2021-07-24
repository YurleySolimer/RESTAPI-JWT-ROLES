import { Router } from 'express'
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import { authJwt, verifySignup } from '../middlewares'

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isAdministrator, 
    verifySignup.checkRolesExisted
], userCtrl.createUser)

export default router