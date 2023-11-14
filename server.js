import express from 'express';

const app = express()

app.use(express.json())

let currentUser = {
    id:"123",
    name:"John Doe",
    age:54,
    hairColo: "brown",
    hobbies: ['swimming', 'bicycling', 'video game']
}

let users =[{
    id:"123",
    name:"John Doe",
    age:54,
    hairColo: "brown",
    hobbies: ['swimming', 'bicycling', 'video game']
},{
    name: "Brenda Doe",
    id: "234",
    age:45,
    hairColor: "black",
    hobbies:['golf', 'math'],
},{
    name: "Jane Doe",
    id: "145",
    age:27,
    hairColor: "blonde",
    hobbies:['biology', 'maedicine', 'gymanstics'],
}]

let products =[{
    name:"Flat-Screen Tv",
    price:"$300",
    description: "Huge LCS screen, a great deal",
    rating:4.5
  }, {
    name:"Basketball",
    price:"$10",
    description: "Like the pros use",
    rating:3.8
  }, {
    name:"running Shoes",
    price:"$120",
    description: "Like the pros use",
    rating:4.2
}]

app.get('/current-user', (req,res)=>{
    res.json(currentUser)
})


app.get('/users/:id', (req,res)=>{
    const {id} = req.params
    res.json((users.find(user => user.id === id)))
    
})
app.get('/users', (req,res)=>{
    res.json(users)
} )

app.post('/users:id', (req,res)=>{
    const {id} = req.params
    const { user:updateUser } = req.body

    users = users.map(user => user.id === id ? updateUser : null)

    res.json(users.find(user=>user.id === id))
})

app.get('/products/:id', (req,res)=>{
    const {id} = req.params
    res.json((products.find(product => product.id === id)))
    
})

app.get('/products', (req,res)=>{
    res.json(products)
} )

app.listen(3000, ()=>{
    console.log('server is listening on port 3000')
})