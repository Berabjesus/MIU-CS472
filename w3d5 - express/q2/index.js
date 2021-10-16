const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    const form = `
    <form action="/result" method="post">
        Name: <input name="name">
        Age: <input name="age"> 
        <button type="submit">Submit</button>
    </form>`;
    res.send(form);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name}, you are ${age} years old`);

});
app.listen(3000);