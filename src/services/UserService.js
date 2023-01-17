const UserService = require('../models/Users');

exports.getAllUsers = async () => {
  return await UserService.find();
}

exports.createUser = async (user) => {
  return await UserService.create(user);
}

exports.getUserById = async (id) => {
  return await UserService.findById(id);
}

exports.updateUser = async (id, user) => {
  return await UserService.findByIdAndUpdate(id, user);
}

exports.deleteUser = async (id) => {
  return await UserService.findByIdAndDelete(id);
}