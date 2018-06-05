var express = require('express');
var router = express.Router();

const doctor = require('./schema/doctor');
const patient = require('./schema/patient');
const prescription = require('./schema/prescribe');
const controller = require('./controllers/user');

router.get('/prescriptions',function(req,res,next){
prescription.find(function(err, result){
res.send(result);
});
});

router.get('/prescriptions/:_id', function(req, res){
    
      prescription.find({_id:req.params._id} , function(err,result){
          if(err) throw err;
          res.json(result);
      });
  });

  router.delete('/prescriptions/:_id',(req, res, next)=>{
      prescription.remove({_id: req.params._id}, function(err, result){
      if(err)
        {
          res.json(err);  
        }
          else{
                res.json(result);
              }
            });    
          });

router.route('/')
     .get(controller.getDoctor)
      .post(controller.newDoctor)

   router.route('/:userId')
         .get(controller.getDoctorbyId)

   router.route('/:userId/patients')
         .get(controller.getPatient)
         .post(controller.newPatient)   
         
   router.route('/:userId/patients/:patId')
         .get(controller.getPatbyId)
            
  router.route('/:userId/patients/:patId/prescriptions')
         .get(controller.getPrescription)
         .post(controller.newPrescription)


 router.route('/:userId/patients/:patId/prescriptions/:presId')      
         .get(controller.getPrescriptionbyId)


         module.exports = router;
