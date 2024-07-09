import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import "./config/db.js"
import contactRouter from "./routes/contactRouter.js"
import orderRouter from "./routes/orderRoute.js"
import cartRouter from "./routes/cartRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors());

//dbConnection
connectDb();

//api endpoints
app.use("/api/user",userRouter)
app.use("/api",contactRouter)
app.use("/api/order",orderRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("api working")
})
app.listen(port, ()=>{
    
    console.log(`server started on http://localhost:${port}`)
})