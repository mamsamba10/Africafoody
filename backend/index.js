import { createRequire} from "module";
const require = createRequire(import.meta.url)
const express = require('express')


const app = express()

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})