const doc = require('../schema/doctor');
const hospital = require('../schema/hospital');
const hAdmin = require('../schema/hospital_admin');
const lab = require('../schema/lab');
const lAdmin = require('../schema/lab_admin');
const labAssist = require('../schema/lab_assist');
const pat = require('../schema/patient');
const pharm = require('../schema/pharm');
const pAdmin = require('../schema/pharm_admin');
const pharmAssist = require('../schema/pharm_assist');
const sAdmin = require('../schema/super_admin');

const jwt = require('jsonwebtoken');

const secret = 'crypto';

function register(req, res) {

  var role = req.body.role;

  if(role == 'Sadmin'){
    const obj = new sAdmin(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Doctor'){
    const obj = new doc(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Hadmin'){
    const obj = new hAdmin(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Hospital'){
    const obj = new hospital(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Lab'){
    const obj = new lab(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'LabAssist'){
    const obj = new labAssist(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Ladmin'){
    const obj = new lAdmin(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Padmin'){
    const obj = new pAdmin(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'Pharm'){
    const obj = new pharm(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

  else if(role == 'PharmAssist'){
    const obj = new pharmAssist(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }  

  else{
    const obj = new pat(req.body);
    obj.save((err, item) => {
      if (err) {return console.error(err);}
      res.json(item);
    });
  }

}

function login(req, res) {

  var role = req.body.role;

  if(role == 'Sadmin'){
    sAdmin.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Doctor'){
    doc.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Hadmin'){
    hAdmin.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Hospital'){
    hospital.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Lab'){
    lab.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'LabAssist'){
    labAssist.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Ladmin'){
    lAdmin.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Padmin'){
    pAdmin.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'Pharm'){
    pharm.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  else if(role == 'PharmAssist'){
    pharmAssist.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }  

  else{
    pat.findOne({ username: req.body.username }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, secret); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }
  
}

function get(req, res) {

  var data = req.body;

  if(data.role == 'Sadmin'){
    sAdmin.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Doctor'){
    doc.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Hadmin'){
    hAdmin.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Hospital'){
    hospital.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Lab'){
    lab.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'LabAssist'){
    labAssist.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Ladmin'){
    lAdmin.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Padmin'){
    User.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'Pharm'){
    pharm.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  else if(data.role == 'PharmAssist'){
    pharmAssist.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }  

  else{
    pat.findOne({ _id: data._id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }
}


module.exports = {
    register,login,get
}

/*
function Sadmin(req, res, next) {

  var data = req.decoded.user;

  return function() {
    if(data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}

function Doctor(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Doctor'|| data.role=='Sadmin' || data.role=='Hadmin'){next()}
    else {res.send(403)}
  }

}

function Hadmin(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Hadmin'|| data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}

function Hospital(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Hospital' || data.role=='Hadmin' || data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}
function Lab(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Lab'|| data.role=='Sadmin' || data.role=='Ladmin'){next()}
    else {res.send(403)}
  }

}
function LabAssist(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='LabAssist' || data.role=='Ladmin' ||data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}
function Ladmin(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Ladmin'||data.role=='Sadmin'||data.role=='Hadmin'){next()}
    else {res.send(403)}
  }

}
function Padmin(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Padmin'||data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}
function Patient(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Patient'||data.role=='Hadmin'||data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}
function Pharm(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='Pharm' || data.role=='Hadmin'||data.role=='Sadmin'){next()}
    else {res.send(403)}
  }

}
function PharmAssist(req, res, next) {
  
  var data = req.decoded;

  return function() {
    if(data.role=='PharmAssist' || data.role=='Sadmin'|| data.role=='Padmin'){next()}
    else {res.send(403)}
  }

}
*/