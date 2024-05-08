import mustache from 'mustache-express'
import { path, __dirname } from '../configs.js'

export default (app)=>{
    app.engine('.mustache',mustache(path.join(__dirname,'views/partials'),'.mustache'))
    app.set('view engine', 'mustache')
}