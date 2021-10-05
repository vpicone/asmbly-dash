require("dotenv").config();

const PASSWORD = process.env.password;

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "asmblydash@gmail.com",
    pass: PASSWORD,
  },
  secure: true,
});

const contact = (req, res) => {
  const mailData = {
    from: "asmblydash@gmail.com",
    to: `asmblydash@gmail.com`,
    subject: `Problem reported: ${new Date().toLocaleString()} ${
      req.body.toolName
    }`,
    text: req.body.message,
    html: `<div>
        <h1>${req.body.toolName}</h1>
        ${req.body.message}
      </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
};

export default contact;
