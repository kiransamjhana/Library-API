import ReviewSchema from "./reviewSchema.js";

export const addReview = (obj) => {
  return ReviewSchema(obj).save();
};

export const getReviews = () => {
  return ReviewSchema.find();
};

export const updateReviews = (_id, data) => {
  return ReviewSchema.findByIdAndUpdate(_id, data);
};

export const deleteReview = (_id) => {
  return ReviewSchema.findByIdAndDelete(_id);
};
