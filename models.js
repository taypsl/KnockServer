const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {type: String, required: true},
  mentor: {type: Boolean, default:false},
  phone: {type: String, required: false},
  email: {type: String, required: false},
  background: {type: String, required: false},
  preferences: String,
  weekdayTime: String,
  weekendTime: String,
  education: String,
  children: String,
  ethnicity: String,
  dems: String,
  title: String,
  website: String
});

UserSchema.methods.apiRepr = function() {
  return {
    id: this.id,
    name: this.name,
    background: this.background,
    title: this.title,
    website: this.website,
    mentor: this.mentor
  };
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};

// update models to fit survey data
// update apirepr to return data that I want on the participant page