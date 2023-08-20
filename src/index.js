module.exports = function reverse (n) {
    if (n<0){
        const num = n.toString().slice(1)
        const arrayOfStrings = Array.from(num)
  const arrayL = arrayOfStrings.length - 1;
  const myArray = []
  for (let i =arrayL; i>=0; i-- ){
    myArray.push(arrayOfStrings[i])
  }
  let b = +myArray.join('')
  return b
    } else if (n>0){
        const arrayOfStrings = Array.from(String(n))
  const arrayL = arrayOfStrings.length - 1;
  const myArray = []
  for (let i =arrayL; i>=0; i-- ){
    myArray.push(arrayOfStrings[i])
  }
  let b = +myArray.join('')
  return (b)
    } else if (n === 0){
        return(n)
    }
}
