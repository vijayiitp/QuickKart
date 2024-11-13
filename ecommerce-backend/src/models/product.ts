import mongoose,{Schema} from "mongoose";

const productSchema=new Schema({
   name:{
    type:String,
    required:[true,"Please Enter name"],
   },
   photo:{
    type:[String],
    required:[true,"Please Enter photo"],
   },
   price:{
    type:Number,
    required:[true,"Please enter Price"],
   },
   stock:{
    type:Number,
    required:[true,"Please enter Stock"],
   },
   category:{
    type:String,
    required:[true,"Please Enter Category"],
    trim:true,
   }
},{
    timestamps:true,
})

export const Product=mongoose.model("Product",productSchema);