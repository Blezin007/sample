import dotenv from 'dotenv'
import pkg from 'pg'

const { Client } = pkg

dotenv.config()

const client = new Client({
    user: process.env.PGS_USERNAME,
    host: process.env.PGS_HOST,
    database: process.env.PGS_DB,
    password: process.env.PGS_PASS,
    port: 5432,
})

await client.connect()

export default client;
