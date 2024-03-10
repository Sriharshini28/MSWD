const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 

//TESTING
app.get('/klef/test', async function(req, res){
    //res.send("Koneru Lakshmaiah Education Foundation");
    res.json("Koneru Lakshmaiah Education Foundation");
});

app.post('/klef/cse', async function(req, res){
    res.json(req.body);
    //res.json("Computer Science and Engineering");
});

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('PRO');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

// ...
app.post('/forgotPassword/reset', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('PRO');
        users = db.collection('users');

        // Assuming you have a unique identifier for the user (e.g., email)
        const filter = { emailid: req.body.UserName };
        const update = { $set: { pwd: req.body.newpassword } };

        // Update the password for the user
        await users.updateOne(filter, update);

        conn.close();
        res.json("Password Updated successfully...");
    } catch(err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
});
// ...


//LOGIN MODULE
app.post('/login/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('PRO');
        users = db.collection('users');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

