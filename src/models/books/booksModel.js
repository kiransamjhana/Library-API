import BookSchema from "./BookSchema.js";

export const addBook = (obj) => {
  return BookSchema(obj).save();
};

export const getBooks = () => {
  return BookSchema.findOne();
};
