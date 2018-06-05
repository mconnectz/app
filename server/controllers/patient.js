const User = require('../schema/patient');
const Profile = require('../schema/pat_profile');

module.exports = {
  
  getAll:(req, res)=> {
      User.find({}, (err, docs) => {
        if (err) { return console.error(err); }
        res.status(200).json(docs);
      });
  },
  count:(req, res)=> {
      User.count((err, count) => {
        if (err) { return console.error(err); }
        res.status(200).json(count);
      });
  },
  insert:(req, res) => {
      const obj = new User(req.body);
      obj.save((err, item) => {
        if (err && err.code === 11000) {res.sendStatus(400)}
        if (err) {return console.error(err);}
        res.status(200).json(item);
      });
  },
  get:(req, res) => {
      User.findOne({ _id: req.params.id }, (err, item) => {
        if (err) { return console.error(err); }
        res.status(200).json(item);
      });
  },
  update:(req, res) => {
      User.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
        if (err) { return console.error(err); }
        res.sendStatus(200);
      });
  },
  remove:(req, res) => {
      User.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) { return console.error(err); }
        res.sendStatus(200);
      });
  },
  search:(req,res)=>{
      
      var query = new RegExp('^'+req.body.search,'i');

      User.find({
          "$or":[
                  {name:{$regex:query}},
                  {phone:{$regex:query}}
              ]},(err, data) => {
                  res.json(data);
      });    
   
  },
  getUserProfiles: async(req,res,next)=>{
    const {userId} = req.params;
    const user = await User.findById(userId).populate('profiles');
    res.send(user.profiles);
  },
  
  newUserProfile: async(req,res,next)=>{
    const {userId} = req.params;
    const newProfile = new Profile(req.body);
    const user = await User.findById(userId);
    newProfile.patients = user;
    await newProfile.save();
    user.profiles=user.profiles.concat(newProfile);
    //user.prescription_form.push(newProfile);
    await user.save();
    res.send(newProfile);
  }

}