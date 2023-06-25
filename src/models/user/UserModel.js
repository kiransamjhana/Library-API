import UserSchema from "../models/user/UserSchema";

const insetUser = (userObj) => {
  return UserSchema(userObj).save();
};
