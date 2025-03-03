export const formatUserData = (data) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  username: data.username,
  email: data.email,
  phone: data.phone,
  role: data.role,
  password: data.password, //? quizá hashedPassword
});
