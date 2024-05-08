import { path, __dirname} from '../configs.js'
import express from 'express'

export default (app)=>{
    app.use(express.static(path.join(__dirname,'public')))
}