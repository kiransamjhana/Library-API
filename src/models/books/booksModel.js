import BookSchema from "./BookSchema.js";

export const addBook = (Obj) => {
  return UserSchema(userObj).save();
};

export const getBooks = () => {
  return UserSchema.findOne();
};
