export const validateFormatData = (data) => {
  // Verificar que los datos proporcionados tienen un formato válido y que éste no este vacío
  if (!(typeof data === "object" || Object.keys(data) > 0)) {
    return "Bad request: invalid sent format";
  }
  // si no tiene errores
  return null;
};

export const validateUserFields = (data) => {
  // Verificar que se proporcionen todos los campos obligatorios para crear un nuevo usuario
  const { first_name, last_name, username, email, password } = data;
  if (!(first_name || last_name || username || email || password)) {
    return "Bad request: required fields are missing";
  }
  // si no tiene errores
  return null;
};
