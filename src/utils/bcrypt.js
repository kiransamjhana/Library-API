import bcrypt from "bcryptjs";

const salt = 10;
const hashPassword = (plainPassword) => {
  bcrypt.hashSync(plainPassword);
};
