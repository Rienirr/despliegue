const mongoose= require("mongoose");
const app= require("./app");
const port =process.env.PORT||3977;//cambio de puerto

const urlMongo= "mongodb+srv://admin1:admin123456@antoniodb.bqiyi.mongodb.net/antoniodb";
mongoose.connect(urlMongo,(err,res)=>{
try{
    if(err){
        throw err;
    } else{
        console.log("La conexión a la BD es correcta");

        app.listen(port, ()=>{
            console.log(`Servidor API REST esta funcionando en http://localhost:${port}`);
           });
    }
    } catch(error){
    console.error(error);
    }
});