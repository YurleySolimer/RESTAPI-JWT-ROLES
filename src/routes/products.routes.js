import { Router } from 'express'
const router = Router()

import * as productsCtrl from "../controllers/products.controller";

router.get('/', productsCtrl.getProducts)
router.post('/', productsCtrl.createProduct)
router.get('/:id', productsCtrl.getProduct)
router.delete('/:id', productsCtrl.deleteProduct)
router.put('/:id', productsCtrl.updateProduct)


export default router;