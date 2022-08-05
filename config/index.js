require("dotenv").config();

let config 
// console.log(process.env);
switch (process.env.NODE_ENV) {
    case 'production':
        config = {
            port: process.env.PORT || 3000,
            mongoUri:process.env.MONGO_URI, 
            sendgridApiKey:process.env.SENDGRID_API_KEY, 
            env:  process.env.NODE_ENV
        }
    case 'development':
        config = {
            port: 5000, 
            mongoUri: 'mongodb://localhost:27017/test', 
            sendgridApiKey:process.env.SENDGRID_API_KEY, 
            env:  process.env.NODE_ENV
        }
    default:
        config = {
            port: 5000, 
            mongoUri: 'mongodb://localhost:27017/test',
            sendgridApiKey:process.env.SENDGRID_API_KEY, 
            env:  process.env.NODE_ENV

        }
}

module.exports = Object.freeze(config)