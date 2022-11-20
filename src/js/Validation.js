
import Joi from "joi";
const textError=(key)=>{
     return {
          'string.alphanum': `${key} should only contains alphnumaric characters` ,
          'string.empty': `${key} is required`,
          'string.min': `${key} should have a minimum length of {#limit}`,
          'string.max': `${key} should have a maximum length of {#limit}`,
          'any.required': `${key} is a required`
        }
}

export default class Validation{
     validateRegisterForm(user){
        const schema=Joi.object({
            'first-name': Joi.string().alphanum().min(3).max(30).required().messages(textError('First name')),
            'last-name': Joi.string().alphanum().min(3).max(30).required().messages(textError('Last name')),
             'age': Joi.number().min(10).max(70).required().messages({
               'number.base':`Age must be Number`,
               'number.empty': `Age is required`,
               'number.min': `Age should have a minimum value of {#limit}`,
               'number.max': `Age should have a maximum value of {#limit}`,
               'any.required': `Age is a required`
             }),
             email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org'] } }).messages({
               'string.empty': `Email is required`,
               'string.email': `Email must be valid`,
               'any.required': `Email is a required`
             }),
             password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).messages({
               'string.empty': `Password is required`,
               'string.pattern.base': `Password must be have at least one capital letter and one letter`,
               'any.required': `Password is a required`
             }),
        })
       return schema.validate(user , {abortEarly:false})
     }
}

