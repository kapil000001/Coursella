import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please add title to the course"]
    },
    description : {
        type : String,
    },
    price : {
        type : String,
        required : [true, "Please add cost price to the course"]
    },
    imgLink : {
        type : String,
    },
    published : {
        type : Boolean,
        required : true,
        default : true
    },
    // category : {
    //     type : String,
    // },
    rating : {
        type : Number,
        default : 0
    },
    ratingCount : {
        type : Number,
        default : 0
    },
})

const Course = mongoose.model('Course', courseSchema);

export default Course