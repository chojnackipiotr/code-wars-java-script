# **Code Wars** tasks performed by me :)

Some of the task contain my comments.
I'm begginer JS dev from Poland.

Kudos for Code Wars community for this tasks.
Not only helps to improve my dev skills but also Math. 

If you have any questions feel free to contact with me.

All tasks you can find on https://www.codewars.com

## Task1

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
```
Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

## Task2

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
```
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
```

## Task3

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence ```"The quick brown fox jumps over the lazy dog"``` is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

## Task4

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
```
"a" = 1, "b" = 2, etc.
```
```
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
```

## Task5

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

```Example:```
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

## Task6

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:
```
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
```

## Task7

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

```Example Input```

```
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
```
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

```Example Output```

```
["Open", "Open", "Senior", "Open", "Open", "Senior"]
```
## Task8

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :
````
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
````

## Task9

Write a function, ``persistence``, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
````
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 ````
## Task10

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
````
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
````

## Task11

Given the triangle of consecutive odd numbers:
````
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
````

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
````
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
````

## Task12 Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below
````
[
  '  *  ', 
  ' *** ', 
  '*****'
]
````
and a tower of 6 floors looks like below
````
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
````

## Task13 FIXME: Get Full Name

url: https://www.codewars.com/kata/597c684822bc9388f600010f

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null (None in Python), but may be empty.

Task
Fix the bug so we can all go home early.

## Task14 Kebabize

url: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

Modify the kebabize function so that it converts a camel case string into a kebab case.

```
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
```

Notes:

the returned string should only contain lowercase letters
