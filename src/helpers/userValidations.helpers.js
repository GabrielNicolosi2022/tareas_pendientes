// Verificar que los datos proporcionados tienen un formato válido y que éste no este vacío
export const validateFormatData = (data) => {
  if (!(typeof data === "object" || Object.keys(data) > 0)) {
    return "Bad request: invalid sent format";
  }
  // si no tiene errores
  return null;
};

// Verificar que se proporcionen todos los campos obligatorios para crear un nuevo usuario
export const validateUserFields = (data) => {
  const { email, password } = data;
  if (!email) {
    return "Bad request: Email field is mandatary";
  } else if (!password) {
    return "Bad request: Password field is mandatary";
  } else {
    // si no tiene errores
    return null;
  }
};
