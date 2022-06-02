const express=require ("express");

const app=express();
const PORT= 5000;
app.use(express.json());




app.listen(PORT,(err)=>{
    err?console.log(err):console.log(`serveur is running on port =${PORT}`);
});
