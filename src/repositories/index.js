const mongoose = require('mongoose');
const Users = mongoose.model('users');

exports.get = async () => {
  const res = await Users.find({});
  return res;
};

exports.getByName = async Name => {
  const res = await Users.findOne({ Name: Name });
  return res;
};

exports.create = async data => {
  var users = new Users(data);
  await users.save();
};

exports.del = async id => {
  const res = await Users.findOneAndRemove(id);
  return res;
};
