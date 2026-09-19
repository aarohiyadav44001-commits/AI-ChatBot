import express from 'express';
import "dotenv/config";
import cors from "cors";
import mongoose from 'mongoose';
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
    connectDB();
});

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database");
    }catch(err){
        console.log("Failed to connect with Db",err);
    }
}

// app.post("/test", async (req, res) => {
//     const apiKey = process.env.GROQ_API_KEY;
//     const url = "https://api.groq.com/openai/v1/chat/completions";
    
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             model: "openai/gpt-oss-20b",
//             messages: [{
//                 role: "user",
//                 content: req.body.message
//             }]
//         })
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         // console.log(data.choices[0].message.content);
//         res.send(data.choices[0].message.content);
//     } catch (err) {
//         console.log(err);
//     }
// });