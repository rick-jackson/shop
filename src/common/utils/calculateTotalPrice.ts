export const calculateTotal = (products, cart) => {
  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (product) {
      total += product.price * item.count;
    }
  });

  return total;
};
