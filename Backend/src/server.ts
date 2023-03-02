import express, {Application, json, Request, Response} from 'express'
import  auth  from './Routes'

const app:Application = express()
app.use(json())

app.use ('/auth', auth )
app.listen(5000, ()=>console.log('app running'))