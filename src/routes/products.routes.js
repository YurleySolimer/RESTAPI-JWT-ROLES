import { Router } from 'express'
const router = Router()

import * as productsCtrl from "../controllers/products.controller"
import { verifyToken } from '../middlewares'

router.get('/', productsCtrl.getProducts)
router.post('/', verifyToken, productsCtrl.createProduct)
router.get('/:id', productsCtrl.getProduct)
router.delete('/:id', verifyToken, productsCtrl.deleteProduct)
router.put('/:id', verifyToken, productsCtrl.updateProduct)


export default router;