export const formattedCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'USD'}).format(amount)
}

export const formattedDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: '2-digit' }
  return new Date(date).toLocaleDateString('en-us', options)
}
