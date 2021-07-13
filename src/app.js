import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import productsRouter from './routes/products.routes'
import authRouter from './routes/auth.routes'
import usersRouter from './routes/users.routes'

const app = express()

app.set('pkg', pkg)
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    })
})


app.use('/products', productsRouter)
app.use(authRouter)
app.use(usersRouter)

export default app;