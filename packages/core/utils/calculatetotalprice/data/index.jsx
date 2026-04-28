export const calculateTotalPrice = (arr) => {
    return arr.reduce((total, item) => total + item.price * item.qty, 0);
};
