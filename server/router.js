const express = require('express');
const router = express.Router();

const auth = require('./controllers/auth');
const doctor = require('./controllers/doctor');
const hospital = require('./controllers/hospital');
const hAdmin = require('./controllers/hospital_admin');
const lab = require('./controllers/lab');
const lAdmin = require('./controllers/lab_admin');
const labAssist = require('./controllers/lab_assist');
const patient = require('./controllers/patient');
const pharm = require('./controllers/pharm');
const pAdmin = require('./controllers/pharm_admin');
const pharmAssist = require('./controllers/pharm_assist');
const sAdmin = require('./controllers/super_admin');
const jwt = require('jsonwebtoken');
var User = require('./schema/patient');
const secret = 'crypto';


router.post('/register',auth.register);
router.post('/login',auth.login);

  // router.use(function(req, res, next) {
  //   const token = req.headers['authorization']; // Create token found in headers
  // jwt.verify(token,secret, (err, decoded) => {
  //   if (err) {
  //      res.json({ success: false, message: 'Token invalid: ' + err });
  //    } else {
  //     req.decoded = decoded;
  //    next(); // Exit middleware
  // }
  //  });
  // });

router.post('/getProfile',auth.get);


router.post('/admin/lab',lAdmin.insert);
router.put('/admin/lab/:id',lAdmin.update);
router.delete('/admin/lab/:id',lAdmin.remove);
router.get('/admin/lab/:id',lAdmin.get);
router.get('/admin/lab',lAdmin.getAll);
router.get('/admin/lab/count',lAdmin.count);
router.post('/admin/lab/search',lAdmin.search);

router.post('/assist/lab',lab.insert);
router.put('/assist/lab/:id',lab.update);
router.delete('/assist/lab/:id',lab.remove);
router.get('/assist/lab/:id',lab.get);
router.get('/assist/lab',lab.getAll);
router.get('/assist/lab/count',lab.count);
router.post('/assist/lab/search',lab.search);

router.post('/lab',lab.insert);
router.put('/lab/:id',lab.update);
router.delete('/lab/:id',lab.remove);
router.get('/lab/:id',lab.get);
router.get('/lab',lab.getAll);
router.get('/lab/count',lab.count);
router.post('/lab/search',lab.search);

router.post('/admin/hospital',hAdmin.insert);
router.put('/admin/hospital/:id',hAdmin.update);
router.delete('/admin/hospital/:id',hAdmin.remove);
router.get('/admin/hospital/:id',hAdmin.get);
router.get('/admin/hospital',hAdmin.getAll);
router.get('/admin/hospital/count',hAdmin.count);
router.post('/admin/hospital/search',hAdmin.search);

router.post('/hospital',hospital.insert);
router.put('/hospital/:id',hospital.update);
router.delete('/hospital/:id',hospital.remove);
router.get('/hospital/:id',hospital.get);
router.get('/hospital',hospital.getAll);
router.get('/hospital/count',hospital.count);
router.post('/hospital/search',hospital.search);

router.post('/admin/pharm',pAdmin.insert);
router.put('/admin/pharm/:id',pAdmin.update);
router.delete('/admin/pharm/:id',pAdmin.remove);
router.get('/admin/pharm/:id',pAdmin.get);
router.get('/admin/pharm',pAdmin.getAll);
router.get('/admin/pharm/count',pAdmin.count);
router.post('/admin/pharm/search',pAdmin.search);

router.post('/assist/pharm',pharmAssist.insert);
router.put('/assist/pharm/:id',pharmAssist.update);
router.delete('/assist/pharm/:id',pharmAssist.remove);
router.get('/assist/pharm/:id',pharmAssist.get);
router.get('/assist/pharm',pharmAssist.getAll);
router.get('/assist/pharm/count',pharmAssist.count);
router.post('/assist/pharm/search',pharmAssist.search);

router.post('/pharm',pharm.insert);
router.put('/pharm/:id',pharm.update);
router.delete('/pharm/:id',pharm.remove);
router.get('/pharm/:id',pharm.get);
router.get('/pharm',pharm.getAll);
router.get('/pharm/count',pharm.count);
router.post('/pharm/search',pharm.search);

router.post('/admin',sAdmin.insert);
router.put('/admin/:id',sAdmin.update);
router.delete('/admin/:id',sAdmin.remove);
router.get('/admin/:id',sAdmin.get);
router.get('/admin',sAdmin.getAll);
router.get('/admin/count',sAdmin.count);
router.post('/admin/search',sAdmin.search);

router.post('/doctor',doctor.insert);
router.put('/doctor/:id',doctor.update);
router.delete('/doctor/:id',doctor.remove);
router.get('/doctor/:id',doctor.get);
router.get('/doctor',doctor.getAll);
router.get('/doctor/count',doctor.count);
router.post('/doctor/search',doctor.search);

router.post('/patient',patient.insert);
// var nodemailer = require('nodemailer'); 

//     var client = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'bakash.it2016@gmail.com', 
//             pass: 'bmrahoney5' 
//         },
//         tls: { rejectUnauthorized: false }
//     });


//     router.post('/patient', function(req, res) {
        
//       var user = new User(); 
     
//       user._id = req.body._id;
//       user.username = req.body.username; 
//       user.password = req.body.password; 
//       user.email = req.body.email; 

//       user.temporarytoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); 
    
//       if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === '' || req.body.email === null || req.body.email === '') {
//           res.json({ success: false, message: 'Ensure username, email, and password were provided' });
//       } else {
       
//           user.save(function(err) {
//               if (err) {
                  
//                   if (err.code == 11000) {
                            
//                      res.json({ success: false, message: 'Username or e-mail already exists' });

//                   }
//                   else{
//                   if (err.errors !== null) {
//                      if (err.errors.email) {
//                           res.json({ success: false, message: err.errors.email.message }); 
//                       } else if (err.errors.username) {
//                           res.json({ success: false, message: err.errors.username.message }); 
//                       } else if (err.errors.password) {
//                           res.json({ success: false, message: err.errors.password.message }); 
//                       } else {
//                           res.json({ success: false, message: err }); 
//                       }
//                   } 
//               } 
                  
//               } else {
                  
//                   var email = {
//                       from: 'Akash, bakash.it2016@gmail.com',
//                       to: user.email,
//                       subject: 'Your Activation Link',
//                       html: 'Hello <strong>' + user.username + ',</strong><br><br> Thank you for registering. Please click on the following link to complete your activation:<br><br><a href="http://localhost:3000/api/activate/' +user.temporarytoken +'">http://localhost:3000/api/activate/</a>'
                      
//                   };
                  
//                   client.sendMail(email, function(err, info) {
//                       if (err) {
//                           console.log(err); 
//                       } else {
//                           console.log(info); 
//                           console.log(user.email); 
//                       }
//                   });
//                   res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); 
//               }
//           });
//       }
//   });


//   router.put('/activate/:token', function(req, res) {
//       User.findOne({ temporarytoken: req.params.token }, function(err, user) {
//           if (err) {
//               res.json({ success: false, message: 'Something went wrong!' });
//           } else {
//               var token = req.params.token; 

//               jwt.verify(token, secret, function(err, decoded) {
//                   if (err) {
//                       res.json({ success: false, message: 'Activation link has expired.' }); 
//                   } else if (!user) {
//                       res.json({ success: false, message: 'Activation link has expired.' }); 
//                   } else {
//                       user.temporarytoken = false; 
//                       user.active = true; 
                      
//                       user.save(function(err) {
//                           if (err) {
//                               console.log(err); 
//                           } else {
                              
//                               var email = {

//                                   to: user.email,
//                                   subject: 'Account Activated',
//                                   text: 'Hello ' + user.username + ', Your account has been successfully activated!',
//                                   html: 'Hello<strong> ' + user.username + '</strong>,<br><br>Your account has been successfully activated!'
//                               };
                              
//                               client.sendMail(email, function(err, info) {
//                                   if (err) console.log(err); 
//                               });
//                              // res.redirect('http://localhost:4200/verified'); 
//                               res.send({success:true,message:'Account activated'});
//                           }
//                       });
//                   }
//               });
//           }
//       });
//   });


//   router.post('/authenticate', function(req, res) {
//     var loginUser = (req.body.email).toLowerCase(); 
//     User.findOne({ email: loginUser }).select('email password active').exec(function(err, user) {
//         if (err) {
//             res.json({ success: false, message: 'Something went wrong!' });
//         } else {
    
//             if (!user) {
//                 res.json({ success: false, message: 'Email not found' }); 
//             } else if (user) {

//                 if (!req.body.password) {
//                     res.json({ success: false, message: 'No password provided' }); 
//                 } else {
//                     var validPassword = user.comparePassword(req.body.password);  
//                     if (!validPassword) {
//                         res.json({ success: false, message: 'Could not authenticate password' }); 
//                     } else if (!user.active) {
//                         res.json({ success: false, message: 'Account is not yet activated. Please check your e-mail for activation link.', expired: true });  
//                     } else {
//                         var token = jwt.sign({ email: user.email }, config.secret, { expiresIn: '24h' }); 
//                         res.json({ success: true, message: 'User authenticated!', token: token }); 
//                     }
//                 }
//             }
//         }
//     });
// });
 
router.put('/patient/:id',patient.update);
router.delete('/patient/:id',patient.remove);
router.get('/patient/:id',patient.get);
router.get('/patient/:id',patient.get);
router.get('/patient',patient.getAll);
router.get('/patient/count',patient.count);

router.post('/patient/search',patient.search);



// router.route('/patient/:userId/profiles')
//  .get(patient.getUserProfiles)
//  .post(patient.newUserProfile);

 router.get('/patient',function(req,res,next){
    User.find( function(err, result){
        res.json(result); 
        });
 })

module.exports = router ;


