import Mongoose from "mongoose";

const orderSchema = Mongoose.Schema({
    user : {
        type:Mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User"
    },
    orderItems : [{
        name : {type:String , required:true },
        qty :  {type:Number , required:true },
        image : {type:String , required:true  },
        price : {type:String , required:true  },
        product : {
            type:Mongoose.Schema.Types.ObjectId,
            required : true,
            ref: "Product"
        },

    }],
    shippingAdress: {
        address : {type:String , required:true },
        city : {type:Number , required:true },
        postalCode : {type:String , required:true  },
        country : {type:String , required:true  },
    },
    paymentMethod: {
        type:String,
        required: true,
        unique : true
    },
    paymentResult: {
        id : {type:String},
        status : {type:String},
        update_time : {type:String},
        email : {type:String },
    },
    taxPrice: {
        type:Number,
        required: true,
        default:0.0
    }, 
    shippingPrice: {
        type:Number,
        required: true,
        default:0.0
    }, 
    totalPrice: {
        type:Number,
        required: true,
        default:0.0
    }, 
    isPaid : {
        type : Boolean,
        required : true,
        default:false
    },
    paidAt : {
        type : Date
    },
    isDelivered : {
        type : Boolean,
        required:true,
        default : false
    },
    deliversedAt : {
        type : Date
    },
},
{
    timestamps:true
})

const Order = Mongoose.model("Order", orderSchema)
export default Order