console.log('%c- Task 1 -', 'padding:5px; color:white; background-color:navy; font-size:16px')

String.prototype.toJadenCase = function () { 
    return this.split(' ').map((word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(' ')
  }

  /*Komentarz
  
    1. String.prototype --> Reprezentuje prototyp obiektów danej klasy. Pozwala na dodawanie własności i metod do wszystkich instancji tej klasy.
    
    >>>> Dzięki takiemu zapisowi w funkcji mogę skorzystać z >>this<< bez przekazywania argumentu do funkcji.

    >>>> Taki zapis pozwala również na skorzystanie z wszystkich metod, które dotyczą stringów.

    2. this.split(' ')

    >>>> string.split(separator, limit) 
    Metoda JS pozwalająca na zmianę stringa w tablicę.
    !!! Metoda ZWRACA tablicę !!!
    > separator - pozwala na określenie w jaki znak ma rodzielać stringa. Kiedy parser natrafia na znak określony w separatorze wrzuca dany tekst przed nim jako jeden z elementów tablicy.

    >limit - określa ile razy parser ma dokonać rozdzielenia. Oznacza to, że po wykonaniu dwóch cięć zwracana jest tablica z dwoma stringami.

    3 .map((word)=>{})

    >>> .map() to funkcja wyższego rzędu, która jako argument przyjmuje inną funkcję. 
    !!! Metoda ZWRACA tablicę, która jest wynikiem określonego w funkcji /callback/ działania na każdym elemencie przekazanej tablicy.

    var new_array = arr.map(function callback(currentValue, index, array){}

    > currentValue - element z przekazywanej tablicy w tym przypadku arr

    > index - index z przekazywanej tablicy w tym przypadku arr[i]

    > array - oryginalna tablica na rzecz której wywołano metodę map

    4. return word.charAt(0).toUpperCase() + word.slice(1);

    return - funkcje zazwyczaj coś zwracają

    word.charAt(0) - metoda dedykowana stringą zwraca znak znajdujący się na wskazanej pozycji

    .toUpperCase() - metoda dedykowana stringą, zmienia znak z małej na WIELKĄ literę

    word.slice(1) - metoda dedykowana stringą, wycina określoną część stringa.
    string.slice(start, end) - pozostawienie drugiego parametru bez niczego powoduje, że wycinany jest od indeksu określonego w start do końca danego stringa.
    Pominięcie obydwu parametrów powoduje, że cały string pojawia się tak jak został przekazany.

    >>> DZIAŁANIE tego zapisu:
    >>>> return word.charAt(0).toUpperCase() + word.slice(1); 

    > Zwróc pierwszą literę przekazywanego elementu --> zrób z tej litery Wielką literę ---> połącz ją z przekazywanym elementem ale z częścią od drugiej litery do końca tego stringa.

    5. .join(' ');

    array.join(separator)

    >>> metoda dedykowana TABLICĄ, która zmiania array na stringa. 
    MAP zwróciło nam tablicę a my chcemy stringa stąd zastosowanie metody tablicowej mimo tego, że do tej pory korzystaliśmy z metod dla stringów.

    >>> podobnie jak w split w join korzystamy z separatora, który rozdzieli w tablicy każdy element i pokaże w stringu.

  */

var str = "How can mirrors be real if our eyes aren't real";
console.log(str);
console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(str.toJadenCase());

console.log('%c- Task 2 -', 'padding:5px; color:white; background-color:navy; font-size:16px')

function isIsogram(str) {
  let newStr = str.toLowerCase();
  if (newStr.length===0){
    return true
  } else {
    let arr = newStr.split('').sort();
    let testArr = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i]===arr[i+1]){
          testArr.push(false)
        } else {
          testArr.push(true)
        }
    }
    if (testArr.indexOf(false)>=0){
      return false
    } else {
      return true
    }
  }
}

console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram( "mOose" ))

console.log('%c- Task 2 z wykorzystaniem set -', 'padding:5px; color:white; background-color:navy; font-size:16px')

function isIsogram2 (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size) 
}

console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(isIsogram2("Dermatoglyphics"))
console.log(isIsogram2("aba"))
console.log(isIsogram2( "mOose" ))

console.log('%c- Task 3 z wykorzystaniem set -', 'padding:5px; color:white; background-color:navy; font-size:16px')

function isPangram(str){
  return !str || new Set(str.toLowerCase().replace(/ /g,'').replace('.','')).size === 26
}

console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(isPangram("The quick brown fox jumps over the lazy dog."))

console.log('%c- Task 4 -', 'padding:5px; color:white; background-color:navy; font-size:16px');

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz",
      arr = [],
      splitedString = text.toLowerCase().replace(/[^a-zA-Z]/g, "").split('');
      splitedString.forEach(element => {
          arr.push((alphabet.indexOf(element))+1)
      });
      return arr.toString().replace(/,/g,' ');
}

console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

console.log('%c- Task 5 -', 'padding:5px; color:white; background-color:navy; font-size:16px');

function longestConsec(strarr, k) {
  let str = '';
  strarr.sort((a,b)=>{return b.length - a.length});
  if (strarr.length===0||k>strarr.length||k<=0){
    return str;
  } else {
    for (let i=0; i<k; i++){
      str += strarr[i]
    }
    return str;
  }
}

// https://www.codewars.com/kata/consecutive-strings/train/javascript

function longestConsec2(strarr, k) {
  var n = strarr.length, 
      str = '';

  if (n = 0 || k > n || k <= 0) {
      return str;
  }

  for (var i = 0; i < strarr.length; i++) {
      var currentStr = strarr.slice(i, k + i).join('');
      if (currentStr.length > str.length) {
          str = currentStr;
      }
  }
  return str;
}

console.log('%c- WYNIK -','padding:5px; color:white; background-color:black; font-size: 16px');
console.log(longestConsec2(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));
console.log('wlwsasphmxxowiaxujylentrklctozmymu');
console.log(longestConsec2(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))

console.log('%c- Task 6 -', 'padding:5px; color:white; background-color:navy; font-size:16px');

String.prototype.camelCase=function(){
  let textArr = this.trim().split('');
  let camelCase = "";
  for (var i=0; i<textArr.length; i++){
    if (i===0){
      let firstLetter = textArr[i].toUpperCase();
      camelCase+=firstLetter
    } else if (textArr[i]===" "){
      let capitalLetter = textArr[i+1].toUpperCase();
      camelCase+=capitalLetter;
      i++
    } else {
      camelCase+=textArr[i];
    }
  }
  return camelCase
}

"hello case".camelCase()
"camel case word".camelCase()
" camel case word".camelCase()

String.prototype.camelCase2=function(){
  return this.split(' ').map(function(word){
   return word.charAt(0).toUpperCase() + word.slice(1);
 }).join('');
}


console.log("hello case".camelCase2())
console.log("camel case word".camelCase2())
console.log(" camel case word".camelCase2())

console.log('%c- Task 7 -', 'padding:5px; color:white; background-color:navy; font-size:16px');
// Senior - at least 55 and handicap greater than 7
// 

openOrSenior = (data) =>{
  let test =  data.map(element => {
    if(element[0]>=55&&element[1]>7){
      return "Senior"
    } else {
      return "Open"
    }
  })
  return test;
}

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior2(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

console.log('%c- Task 8 -', 'padding:5px; color:white; background-color:navy; font-size:16px');

function iqTest(numbers){
  // zmiana stringa w tablicę liczb
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  console.log(odd,even)
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}
console.log('%c- Task 9 Persistent Bugger -', 'padding:5px; color:white; background-color:navy; font-size:16px');
function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

console.log('%c- Task 10 Beginner Series #3 Sum of Numbers -', 'padding:5px; color:white; background-color:navy; font-size:16px');

GetSum = (a,b) => {
  let numbers=[]

  if (a===b){
    return a
  } else if (a>b) {
    for (let i=a; i>(b-1); i--){
      numbers = [...numbers, i];
    }
    return numbers.reduce((p,c)=>p+c)
  } else {
    for (let i=a; i<(b+1); i++){
      numbers = [...numbers, i];
    }
    return numbers.reduce((p,c)=>p+c)
  }
}

function GetSum2(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}

console.log(GetSum(0, -1));
console.log(GetSum(0, 1));
console.log(GetSum(1, 1));
console.log(GetSum2(0, -1));
console.log(GetSum2(0, 1));
console.log(GetSum2(1, 1));

console.log('%c- Task 11 Sum of odd numbers -', 'padding:5px; color:white; background-color:navy; font-size:16px');

function rowSumOddNumbers(n) {
  let start = Math.pow(n,2)-(n-1);
  let numbers = [start];
  while (numbers.length<n){
    start++
    if(start%2!==0){
      numbers.push(start)
    }
  }
  return numbers.reduce((p,c)=>p+c);
}
console.log(rowSumOddNumbers(20));

console.log('%c- Task 12 Build Tower -', 'padding:5px; color:white; background-color:navy; font-size:16px');

function towerBuilder(nFloors) {
  let length = nFloors*2-1;
  let arr = [];
  let middle = Math.floor(length/2);
  for(let i=0; i<nFloors ;i++){
     let str = '';
    for(let j=0; j<length; j++){
        if (j>middle+i||j<middle-i){
          str+=' '
        } else {
          str+='*'
        }
      }
    arr.push(str)  
  }
  return arr;
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))