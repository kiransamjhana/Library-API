import BookSchema from "./BookSchema.js";

export const addBook = (Obj) => {
  return BookSchema(Obj).save();
};

export const getBooks = () => {
  return BookSchema.findOne();
};
