const currency = new Intl.NumberFormat(undefined , {
    currency:"USD",
    style:"currency",
})
const currencyFormat = (number) => {
    return currency.format(number);
}
export default(currencyFormat)