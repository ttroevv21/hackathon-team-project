export const calcTotalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
};
