const Todo = require("../models/Todo")


exports.getTodo = async (req,res)=>{

    try {
      const todos = await Todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entry todo all data found"
        })


        
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            message:error.message,
            success:false,
            data:"internal server issu"
        })
    }
}



exports.getTodoById = async (req,res)=>{

    try {
         
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
            res.status(404).json({
                success:false,
                message:"No Data found with given id"
            })
        }else{
            res.status(200).json({
                success:true,
                data:todo,
                message:`Todo Data found by id : ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            message:error.message,
            data:"internal server error"
        })
    }
}