import { getEmailHtml } from "@services/emailHtml";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "vitaliisekreta@gmail.com",
    pass: "yxwl xydb lfds cobw",
  },
});

export default function sendConfirmationEmail(req) {
  const data = JSON.parse(req.body);
  const mailOptions = {
    from: "sekreta2360@gmail.com",
    to: data.email,
    subject: "Підтвердження замовлення",
    html: getEmailHtml(data),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Помилка відправлення листа: ", error);
    } else {
      console.log("Лист було успішно відправлено: " + info.response);
    }
  });
}
