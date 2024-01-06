const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "vitaliisekreta@gmail.com",
    pass: "yxwl xydb lfds cobw",
  },
});

const getHtml = (body) => {
  const total = body.data.reduce(
    (acc, product) => acc + product.count * product.price,
    0
  );

  return `
    <html>
      <body>
        <h1>Привіт, ${body.name}!</h1>
        <p>Ваше замовлення було успішно отримано. Дякуємо!</p>
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr style="border-bottom: 1px solid black;">
              <th style="border: 1px solid black; padding: 8px;">Products</th>
              <th style="border: 1px solid black; padding: 8px;">Title</th>
              <th style="border: 1px solid black; padding: 8px;">Count</th>
              <th style="border: 1px solid black; padding: 8px;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${body.data
              .map(
                (product) => `
                <tr style="border: 1px solid black;">
                  <td style="border: 1px solid black; padding: 8px;">
                    <img
                      width=50
                      height=50
                      src=${product.image}
                      alt=${product.title}
                      style="object-fit: contain;"
                    />
                  </td>
                  <td style="border: 1px solid black; padding: 8px;"><a href=/${product.category}/${product.id} traget=_blank>${product.title}</a></td>
                  <td style="border: 1px solid black; padding: 8px;">${product.count}</td>
                  <td style="border: 1px solid black; padding: 8px;">$ ${product.price}</td>
                </tr>
              `
              )
              .join("")}
            <tr>
              <td colspan="3" style="text-align: right; border: none; padding: 8px;">Total:</td>
              <td style="border: 1px solid black; padding: 8px;">$ ${total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;
};

export default function sendConfirmationEmail(req) {
  const data = JSON.parse(req.body);
  const mailOptions = {
    from: "sekreta2360@gmail.com",
    to: data.email,
    subject: "Підтвердження замовлення",
    html: getHtml(data),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Помилка відправлення листа: ", error);
    } else {
      console.log("Лист було успішно відправлено: " + info.response);
    }
  });
}
