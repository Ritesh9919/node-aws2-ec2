import express from 'express'

const PORT = process.env.PORT || 8000

const app = express();
app.use(express.json())

const users = [
    {
        name:"Ritesh Maurya",
        email:"ritesh@gmail.com",
        age:26

    },
    {
        name:"Mohan Maurya",
        email:"mohan@gmail.com",
        age:50
    },
    {
        name:"Pawan Maurya",
        email:"pawan@gmail.com",
        age:23
    }
]


app.get('/', (req, res)=> {
    res.status(200).json({success:true, message:"Hello World"})
})

app.get('/users', (req, res)=> {
   res.status(200).json(users)
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`)
})