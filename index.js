import express from 'express'
import {createProxyMiddleware} from 'http-proxy-middleware'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

const URL = process.env.API_SERVICE_URL
const PORT = process.env.API_SERVICE_PORT
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

app.use(
  cors({
    exposedHeaders: '*'
  })
)

app.use(
  '/',
  createProxyMiddleware({
    target: URL,
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
  })
)

app.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${URL}:${PORT}`)
})
