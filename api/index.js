import mongoose from 'mongoose'
import express from 'express'
import taskRoute from './routes/tasks.route.js'
import cors from 'cors'

const app = express();
const port = 6868;


mongoose.connect('mongodb+srv://ujjwalkumar94310:d1QWY91RH3D02c2x@db.zgqkng0.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to mongo!')
})
.catch((err) =>{
    console.log(err.message)
})

app.use(cors());
app.get('/', (req,res)=>{
    res.json({
        message: 'It begins here'
    })
})
app.use(express.json())  //middleware  bridge bt req and resp

app.use('/api', taskRoute )

app.listen((port), ()=>{
    console.log('Its working on Port no.6868')
})

