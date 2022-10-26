const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "plese enter your name"],
        trim: true

    },
    description: {
        type: String,
        required: [true, "plese enter your Description"]

    },
    price: {
        type: Number,
        required: [true, "plese enter product price"],
        maxLength: [8, "price cannot exceed 8 characters"]

    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            piblic_id: {
                type: String,
                required: true

            },
            url: {
                type: String,
                required: true

            },
        }
    ],

    category: {
        type: String,
        required: [true, "plese enter a product category"],
    },

    Stock: {
        type: Number,
        required: [true, "plese enter a product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },

    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }

})


module.exports = mongoose.model("product",productSchema);





















// const mongoose = require("mongoose");
// const validator  = require("validator");

// const userSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minLength:3
//     },
//     email:{
//         type:String,
//         required:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('invalid emailid')
//             }
//         }
//     },
//     phone:{
//         type:Number,
//         required:true,
//         min:10
//     },
//     msg:{
//         type:String,
//         required:true,
//         minLength:3
//     },
//     date:({
// type:Date,
// default:Date.now
//     }),
// })

// // we need a colecction

// const User = mongoose.model("User", userSchema);
// module.exports = User;