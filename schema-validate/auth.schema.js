const Joi=require('joi')

const schemas ={
createUser: Joi.object().keys({ 
    firstName: Joi.string().required() ,
    middleName: Joi.string() ,
    lastName: Joi.string().required() ,
    email: Joi.string().required().email(), 
    password: Joi.string().required(),
    phone: Joi.required(),
    dob: Joi.date(),
    occupation: Joi.string(),
    company: Joi.string()
  }),
  userLogin: Joi.object().keys({ 
    email: Joi.string().required().email(), 
    password: Joi.string().required() 
  }),

}; 


  module.exports = schemas;