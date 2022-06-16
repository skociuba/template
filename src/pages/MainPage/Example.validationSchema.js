// const ACCOUNT_VALIDATION_SCHEMA = {
//   type: 'string',
//   transform: ['trim'],
//   minimumLength: 1,
//   errorMessage: {
//     minimumLength: 'this field is required',
//   },
// };

const getValidationSchema = (minimum, maximum, value) => ({
  type: 'number',
  minimum,
  maximum,
  errorMessage: {
    minimum: value === null ? 'put number' : 'put greater value',
    maximum: 'to much',
  },
});

export const exampleValidation = ({minimum, maximum, value}) => ({
  value: getValidationSchema(minimum, maximum, value),
});
