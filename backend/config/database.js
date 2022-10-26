const mongoose = require("mongoose")



//  #################  working data base  ###############

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=> 
    {console.log(`connection was susscifully :${data.connection.host}`)
    })
    .catch((err)=>{
    console.log(err); 
    }); 
}

module.exports = connectDatabase;

//  ################### working code ##################

// mongoose.connect("mongodb://localhost/nodeweb",{
//     useNewUrlParser:true,useUnifiedTopology:true,
// })
// .then(()=> console.log("connection was susscifully"))
// .catch((error)=>{
// console.log(error); 
// }); 



// const connectDatabase = ()=>{
//     mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
//     .then((data)=> 
//     {console.log(`connection was susscifully :${data.connection.host}`)
//     })
//     .catch((err)=>{
//     console.log(err); 
//     }); 
// }

// module.exports = connectDatabase;