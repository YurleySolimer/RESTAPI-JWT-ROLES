import { Router } from 'express'
const router = Router()

import * as productsCtrl from "../controllers/products.controller"
import { authJwt } from '../middlewares'

router.get('/', productsCtrl.getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct)
router.get('/:id', productsCtrl.getProduct)
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdministrator], productsCtrl.deleteProduct)
router.put('/:id', [authJwt.verifyToken, authJwt.isAdministrator], productsCtrl.updateProduct)


export default router;