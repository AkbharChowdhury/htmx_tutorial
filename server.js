import express from 'express';
const app = express();
// set static folder
app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
const PORT = 3_000;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT.toLocaleString('en-GB')}`);
});
app.get('/users', (req, res) =>{
    const users = [
        {id: 1, name:'tom'},
        {id: 2, name:'Jack'},

    ];
    res.send(/*html */`
        <h1 class="text-2xl font-bold my-4">
            Users
        </h1>
        <ul>
            ${users.map(user => `<li> ${user.name} </li>`).join('')}
            
        </ul>
        
      `);

});