export const formatedUser = (data, hashedPassword) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  username: data.username,
  email: data.email,
  phone: data.phone,
  role: data.role,
  password: hashedPassword,
});
