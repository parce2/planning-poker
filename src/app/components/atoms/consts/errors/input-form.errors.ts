const errorMessages: { [key: string]: string } = {
  required: 'El campo es requerido.',
  minlength: 'El texto debe tener al menos 5 caracteres.',
  maxlength: 'El texto no debe tener más de 20 caracteres.',
  pattern: 'El texto contiene caracteres no permitidos.',
  numbers: 'El texto contiene más de 3 números.',
  onlyNumbers: 'El texto no puede contener solo números.'
};

export { errorMessages }

