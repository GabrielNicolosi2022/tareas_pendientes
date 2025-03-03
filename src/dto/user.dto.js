export const formatedUser = (data, hashedPassword) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  username: data.username,
  email: data.email,
  phone: data.phone,
  role: data.role,
  password: hashedPassword,
});

export const showFormattedUser = (user) => ({
  userId: user._id,
  first_name: user.first_name,
  last_name: user.last_name,
  username: user.username,
  email: user.email,
  phone: user.phone,
  role: user.role,
});
