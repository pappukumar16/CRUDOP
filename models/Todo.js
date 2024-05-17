const mongoose = require("mongoose")
const todoSchima = new mongoose.Schema( 
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },

    },{ timestamps: true })


  module.exports = mongoose.model("Todo",todoSchima)