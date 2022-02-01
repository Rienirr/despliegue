const mongoose= require("mongoose");
const app= require("./app");
const port =3000;
//const urlMongo= "mongodb+srv://admin:<admin123456>@cluster0.7iic4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const urlMongo= "mongodb+srv://admin:<admin123456>@cluster0.7iic4.mongodb.net/Cluster0";
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