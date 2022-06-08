module.exports = function toReadable (number) {

  const firstArr = ['zero', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
  const secondArr = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety']

  const numberArr = String(number).split('')

  if(number <= 19) {
    return firstArr[number]
  }
  if(number <= 99 && numberArr[1] === '0') {
    return secondArr[numberArr[0] - 2]
  }
  if(number <= 99) {
    return `${secondArr[numberArr[0] - 2]} ${firstArr[numberArr[1]]}`
  }
  if(number <= 999 && numberArr[1] === '0' && numberArr[2] === '0') {
    return `${firstArr[numberArr[0]]} hundred`
  }
  if(number <= 999 && numberArr[1] <= '1') {
    return `${firstArr[numberArr[0]]} hundred ${firstArr[Number(numberArr.slice(1, numberArr.length).join(''))]}`
  }
  if(number <= 999 && numberArr[2] === '0') {
    return `${firstArr[numberArr[0]]} hundred ${secondArr[numberArr[1] - 2]}`
  }
  if(number <= 999) {
    return `${firstArr[numberArr[0]]} hundred ${secondArr[numberArr[1] - 2]} ${firstArr[numberArr[2]]}`
  }

}
