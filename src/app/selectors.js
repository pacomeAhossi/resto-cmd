export const getProductList = (state) => state?.list;

export const getTotalOrder = (state) => getProductList(state).reduce((prevElement, currentElement) => Math.round((currentElement.price + prevElement) * 100 ) / 100, 0);

export const isVoucherAvailable = (state) => getProductList(state).find((product) => product.title === "Super Crémeux");