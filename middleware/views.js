import { path, __dirname } from "../configs.js";

export default (app) => {
    app.set('views', path.join(__dirname,'views'))
}