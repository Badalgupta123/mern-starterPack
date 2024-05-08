import express from "express"
import cors from "cors"
const app = express();
const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my app</h1>')
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
// to read encoded url (parsing encoded url)
app.use(express.urlencoded({extended:true, limit:"16kb"}))


app.listen(port,()=>{
    console.log(`App is listening at port no ${port}`)
})