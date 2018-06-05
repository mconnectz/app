const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var profileSchema = new Schema({

firstname:{type:String},
   lastname:{type:String},
   relationship:{type:String},
   address :{type:String},
   city :{type:String},
   state :{type:String},
   country :{type:String},
   mobile:{type:Number},
   email:{type:String},
   bloodgroup:{type:String},
   pincode:{type:Number},
   gender :{type:String},
    insuranceprovidername: { type: String},
   policyholdername:{type:String },
   policyno:{type:String},
   policyissuancedate:{type:String},
   height: { type:Number},
   weight: { type: Number},
   allergicto:{type:String},
   smoke: { type: String},
   tobacco:{type:String},
   alcohol:{type:String},

   patients: [{
    type: Schema.Types.ObjectId,
    ref: 'Patients'  
 }]
});

module.exports = mongoose.model('profile', profileSchema);