export const validate = (name, data, required) => {
  switch (name) {
    case "name":
    case "surname":
    case "address":
    case "apellido":
    case "username":
    case "gender":
    case "date_of_birth":
      //Aqui evaluaremos strings que NO pueden tener números
      if (data === "" && required === true) {
        return {
          message: "Por favor, rellene los campos requeridos",
          validated: false
        };
        //Evaluamos mediante la expresión regular
      } else if (!/[a-z]/gi.test(data)) {
        return {
          message: "Por favor rellene el campo con un texto válido",
          validated: false,
        };
      }
      return { message: "", validated: true };
    case "correo":
    case "mail":
    case "email":
      if (data === "" && required === true) {
        return {
          message: "Por favor, rellene los campos requeridos",
          validated: false,
        };
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
      ) {
        return { message: "Invalid e-mail format", validated: false };
      }

      return { message: "", validated: true };

    case "password":
      if (data === "" && required === true) {
        return {
          message: "Por favor, rellene los campos requeridos",
          validated: false,
        };
      } else if (!/[\d()+-]/g.test(data)) {
        return { message: "Formato de contraseña invalido", validated: false };
      }
      return { message: "", validated: true };
    case "postcode":
    case "phone":
    case "tlf":
    case "telefono":
    case "phonenumber":
      if (data === "" && required === true) {
        return {
          message: "Por favor, rellene los campos requeridos",
          validated: false,
        };
      } else if (/\+?\(?\d{2,4}\)?[\d\s-]{12,}/.test(data)) {
        return { message: "Formato de contraseña invalido", validated: false };
      }
      return { message: "", validated: true };

    case "dni":
    case "nif":
    case "document":
      break;

    default:
      console.log("Campo no reconocido");
  }
};
