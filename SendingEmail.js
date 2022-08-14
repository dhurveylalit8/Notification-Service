/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    port:465,       //true for 465, false for oher ports
    // host : "smtp.gamil.com",
    service : 'gmail',
    auth:{
        user : 'dhurvelalit8@gmail.com',
        pass: "rmihdaknkqnafywl",
    },
    secure : true,
})
console.log(typeof transporter);

/**
 * Sending email
 */

const mailDataObj = {
    from : 'crm-no-reply@gmail.com',
    to :'dhurvelalit8@gmail.com',
    subject : "Testing the code to send email",
    test : "Sample text content",
    html : "<b> Hello World ! </b>"
}

transporter.sendMail((mailDataObj), (err, data) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("email send successfully");
    }
})