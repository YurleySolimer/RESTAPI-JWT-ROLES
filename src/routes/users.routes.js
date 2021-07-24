import { Router } from 'express'
const router = Router()
import * as userCtrl from '../controllers/user.controllers'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdministrator], userCtrl.createUser)

export default router