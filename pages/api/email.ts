import { getEmailHtml } from "@services/emailHtml";
import { enqueueSnackbar } from "notistack";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "vitaliisekreta@gmail.com",
    pass: "sfmy fkci ldqe ltyf",
  },
});

export default function sendConfirmationEmail(req) {
  const data = JSON.parse(req.body);
  const mailOptions = {
    from: "vitaliisekreta@gmail.com",
    to: data.email,
    cc: "vitaliisekreta@gmail.com",
    subject: "Order confirmation",
    html: getEmailHtml(data),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      enqueueSnackbar("Error!", { variant: "error" });
    } else {
      enqueueSnackbar("Success!", { variant: "success" });
    }
  });
}
