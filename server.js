import express from 'express';
const app = express();
// app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('pages/index');
})
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
const PORT = 3_000;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT.toLocaleString('en-GB')}`);
});
const fetchUsers = async () => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const users = await response.json();
    return users;

}
app.get('/users',  async (req, res) =>{
     fetchUsers().then(users => {

        res.send(/*html */`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map(user => `<li> ${user.name} </li>`).join('')}
            
        </ul>
        
      `);

     });
    

});


