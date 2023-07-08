import BurrowSchema from "./BurrowSchema.js";

export const addBurrow = (userObj) => {
  return UserSchema(userObj).save();
};

export const getBurrows = () => {
  return UserSchema.find();
};

//alll burrow transaction for indivi =(usedual user of their own
