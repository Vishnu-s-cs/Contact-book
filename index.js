console.clear()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = 5500


dotenv.config();


//middleware
app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Credentials", true); 
  next();
});
app.use(express.json()); 
app.use(
  cors({
    origin: "*",
  })
); 

app.use(cookieParser());
app.use(helmet()); 
app.use(morgan("common")); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started at port ${PORT}`)
    })
})
