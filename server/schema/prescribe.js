var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var prescribeSchema = new Schema({
  date:{type:Date, default:Date.now},
  healthissue:{type:String},
  diagnosisreport: {type: String},
  otherremark: {type: String},
  medicine: {type: String},
  dosage:{type:String},
  frequency:{type:String},
  comments:{type:String},
  pharmacie:{type:String},
  test:{type:String},
  lab:{type:String},
  patientname:{type:String},
  doctoename:{type:String},
  
  doctors: [{
    type: Schema.Types.ObjectId,
    ref: 'doctor'  
 }],
 patients: [{
  type: Schema.Types.ObjectId,
  ref: 'patient'  
}]
});


module.exports = mongoose.model('prescription', prescribeSchema);