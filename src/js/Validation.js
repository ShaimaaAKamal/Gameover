
import Joi from "joi";
export default class Validation{
     validateRegisterForm(user){
        console.log(user.password.length)
        const schema=Joi.object({
            'first-name': Joi.string().alphanum().min(3).max(30).required(),
            'last-name': Joi.string().alphanum().min(3).max(30).required(),
             age: Joi.number().min(10).max(70).required(),
             email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org'] } }),
             password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        })
       return schema.validate(user , {abortEarly:false})
     }
}