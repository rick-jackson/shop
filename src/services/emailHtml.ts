export const getEmailHtml = (body) => {
  const total = body.data.reduce(
    (acc, product) => acc + product.count * product.price,
    0
  );

  return `
        <html>
          <body>
            <h1>Hi, ${body.name}!</h1>
            <p>Your order has been successfully received. Thank you!</p>
            <table style="border-collapse: collapse; width: 100%;">
              <thead>
                <tr style="border-bottom: 1px solid black;">
                  <th style="border: 1px solid black; padding: 8px;"></th>
                  <th style="border: 1px solid black; padding: 8px;">Product name</th>
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
                      <td style="border: 1px solid black; padding: 8px;"><a href=https://shop-jet-xi.vercel.app/${product.category}/${product.id} traget=_blank>${product.title}</a></td>
                      <td style="border: 1px solid black; padding: 8px;">${product.count}</td>
                      <td style="border: 1px solid black; padding: 8px;">$ ${product.price}</td>
                    </tr>
                  `
                  )
                  .join("")}
                <tr>
                  <td colspan="3" style="text-align: right; border: none; padding: 8px;"><b>Total:</b></td>
                  <td style="border: 1px solid black; padding: 8px;">$ ${total.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </body>
        </html>
      `;
};
