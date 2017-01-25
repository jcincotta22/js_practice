

function uniq(a){
  let non_uniq = {}
  for(let i = 0; i < a.length; i++){
    non_uniq[a[i]] = a[i]
  }
  return non_uniq
}
let array = [12, 13, 22, 1, 2, 4, 4, 3, 7, 8, 9, 11, 13]
array.sort(function(a, b){return a - b});
console.log(array)
output = uniq(array)
console.log(output)

// reverse a string
function reverseString(str){
  newString = str.split('')
  output = []
  for(let i = newString.length - 1; i >= 0; i--){
    output.push(newString[i])
  }
  return output.join('')
}

jeff = reverseString('jeffrey')

console.log(jeff)

'jeffrey'.split('').reverse().join('')

function numToString(num){
  let newNum
  outputArray = []
  outputHash = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }
  if(num < 10){
    return outputHash[num]
  }
  outputArray.unshift(outputHash[num % 10])
  newNum = Math.floor(num/10)
  while(newNum !== 0){
    outputArray.unshift(outputHash[newNum % 10])
    newNum = Math.floor(newNum / 10)
  }
  return outputArray.join('')
}

class Dog{
  constructor(name, age){
    this.name = name;
    this.age = age;
    }

    speak(){
      console.log('woof, woof!')
    }
}

class Cat extends Dog{

}
