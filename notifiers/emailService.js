/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
     port:465,       //true for 465, false for oher ports
     // host : "smtp.gamil.com",
     service : 'gmail',
     auth:{
         user : 'dhurvelalit8@gmail.com',
         pass: "rmihdaknkqnafywl",
     },
     secure : true,
 })
 