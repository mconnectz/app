const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema; 

let pat_schema = new Schema({
  role:{type: String,default:'Patient' },
  username: { type: String },
  password:{ type: String },
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

   doctors: [{
    type: Schema.Types.ObjectId,
    ref: 'Doctors'  
 }],
 prescriptions: [{
  type: Schema.Types.ObjectId,
  ref: 'prescription'  
}],
profiles: [{
  type: Schema.Types.ObjectId,
  ref: 'profile'  
}]
});

pat_schema.pre('save', function(next){

  if(!this.isModified('password'))
    return next();

  bcrypt.hash(this.password,null,null,(err,hash) => {
    if(err)return next(err);
    this.password = hash;
    next();
  });

});

pat_schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('Patients', pat_schema);
