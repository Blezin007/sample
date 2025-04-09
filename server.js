import express from 'express'
import sampleRoutes from './Routes/sampleRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use('/', sampleRoutes);

app.listen(port, ()=>{
    console.log(`Express is running on localhost:${port}`)
})
