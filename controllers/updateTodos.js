const Todo = require("../models/Todo");

 exports.updateTodo = async(req,res)=>{
    
    try {
            
       const {id} =  req.params;
       
        const {title,description} = req.body;
      const todo =  await Todo.findByIdAndUpdate({_id:id},{title,description});

      res.status(200).json({
        success:true,
        data:todo,
        message:`updated successful`
      })
        
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
             message:`internal server issu`,
            error:error.message,

        })

    }
}