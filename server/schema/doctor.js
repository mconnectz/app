const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema; 

let doc_schema = new Schema({
  role:{type: String,default:'Doctor' },
  username: { type: String },
  password:{ type: String },
  dfirstname:{ type: String },
 dlastname:{ type: String },
 daddress:{ type: String },
 dmobile:{ type: Number },
 demail:{ type: String },
 darea:{ type: String },
 dcity:{ type: String },
 dcountry:{ type: String },
 dstate:{ type: String },
 dpincode:{ type: Number },
 deducationdetails:{ type: String },
 dcertificateno:{ type: String },
 dspecialist:{ type: String },
 dregistrationno:{ type: String },
 dyearsofexperience:{ type: String },

 patients: [{
  type: Schema.Types.ObjectId,
  ref: 'Patients'  
}],
prescriptions: [{
type: Schema.Types.ObjectId,
ref: 'prescription'  
}]
});


doc_schema.pre('save', function(next){

  if(!this.isModified('password'))
    return next();

  bcrypt.hash(this.password,null,null,(err,hash) => {
    if(err)return next(err);
    this.password = hash;
    next();
  });

});

doc_schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('Doctors', doc_schema);
