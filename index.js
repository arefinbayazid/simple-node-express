const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! Iam from backend i am node i love bd')
})

const users = [
    {id : 0, name : 'bayzid arefin', email : 'arefin@gmail.com', phone: '01745185933'},
    {id : 1, name : 'israt arefin', email : 'arefin@gmail.com', phone: '01745185933'},
    {id : 2, name : 'luba arefin', email : 'arefin@gmail.com', phone: '01745185933'},
    {id : 3, name : 'zulekha khatun', email : 'arefin@gmail.com', phone: '01745185933'},
    {id : 4, name : 'nurul islam', email : 'arefin@gmail.com', phone: '01745185933'},
]
app.get('/users', (req, res) =>{
    const searchText = req.query.search;
    if(searchText){
        const filterdResult = users.filter(item => item.name.toLocaleLowerCase().includes(searchText))
        res.send(filterdResult)
    }
    else{
        res.send(users)
    }
})
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('userHiteed', newUser)
    res.json(newUser)
})
app.get('/users/:id', (req, res) =>{
    const index = req.params.id;
    const user = users[index];
    res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})