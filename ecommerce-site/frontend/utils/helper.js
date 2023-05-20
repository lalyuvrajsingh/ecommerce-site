export const convertDiscountedPrice = (orignalPrice, price ) => {
    return ((orignalPrice - price) / orignalPrice * 100).toFixed(0)
}