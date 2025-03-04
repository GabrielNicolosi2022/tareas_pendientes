// Verificar que el usuario tenga el perfil completo
export const verifyUserFields = (data) => {
  const { first_name, last_name, username, role, position, category } = data;
  if (!(first_name || last_name || username || role || position || category)) {
    return "You must complete your user profile";
  }
  // si no tiene errores
  return null;
};
