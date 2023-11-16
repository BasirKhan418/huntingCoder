// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");
var QRCode = require('qrcode')

export default async function handler (req, res) {
    var img = await QRCode.toDataURL('https://walrus-app-yve6b.ondigitalocean.app/');
    const transporter = await nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
          user: 'basirkhan4ukhanatoz@gmail.com',
          pass: 'O1aXMRNItUmjprkD'
        }
      });
      const info = await transporter.sendMail({
        from: '<InnovateU@Tech.com>', // sender address
        to: `basirkhan4ukhanatoz@gmail.com`, // list of receivers
        subject: `🎉 Qr code for devfest entry 🚀`, // Subject line
        text: "Account Created Successfully",
        attachDataUrls: true,
         // plain text body
        html: `<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #333333;">Hi there!</h1>
            <p style="color: #555555;">Your QR code for entry into Devfest is below:</p>
            <img src="${img}" alt="qr code" style="max-width: 400px; height: 400px; display: block; margin: 20px auto;">
        </div>
    
        <div style="text-align: center; margin-top: 20px;">
            <p>Thank you for joining Devfest!</p>
        </div>
    </body>`, 
       
      });
res.status(200).json({message:"email sent successfully"})
}
