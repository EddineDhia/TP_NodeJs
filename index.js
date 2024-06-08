const express = require("express");
const path = require("path");
const app = express();

app.get("/auth", (req, res) => {
    res.send("This is Authentication page could you please add /login in you'r URL path");
});

app.get("/auth/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'auth.html'));
});

app.get("/auth/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'reggster.html'));
});

let user = [
    {id:1,firstName:"Ahmed", lastName:"hlel", email:"ahmed@hallel@intertnet.tn",phone:"54221332",dob:"12/02/1999",profession:"student"},
    {id:2,firstName:"ali", lastName:"hlel", email:"ahmed@hallel@gg.tn",phone:"55213214",dob:"12/02/2000",profession:"developer"},
    {id:3,firstName:"Majdi", lastName:"Sliti", email:"ahmed@hallel@cc.tn",phone:"54221332",dob:"01/02/1999",profession:"student"},
    {id:4,firstName:"Manel", lastName:"Zagnani", email:"ahmed@hallel@cc.tn",phone:"55214487",dob:"08/02/1999",profession:"developer"},
    {id:5,firstName:"Haithm", lastName:"Sboui", email:"ahmed@hallel@vv.tn",phone:"33625142",dob:"10/02/1999",profession:"student"},
]

app.get("/post/all",(req,res)=>{
    res.json(user);
}

)

app.get("/post/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const foundUser = user.find(u => u.id === userId);
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});


app.listen(3000, () => console.log("Listening on Port 3000, working with success"));
