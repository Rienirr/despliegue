const Task = require("../models/task");
async function createTask(req, res){
    const task = new Task();
    const params = req.body;
    task.title = params.title;
    task.description = params.description;
    try{
        const taskStore = await task.save();
        if(!taskStore){
            res.status(400).send({msg: "No se ha guardado la tarea"});
        }else{
            res.status(200).send({task: taskStore});
        }
    }catch(error){
        res.status(500).send(error);
    }
}
/* function createTask(req,res){
    console.log("Creando nuestra primera tarea");
    //console.log(req.body);
} */

module.exports={
    createTask,
}