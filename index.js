const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newArray = [];

  newArray = tutorials.map(titleCapper)

  return newArray
}

function titleCapper(title) {
  let titleSplit = title.split(" ");
  for (let letter = 0; letter < titleSplit.length; letter++) {
    titleSplit[letter] = titleSplit[letter][0].toUpperCase() + titleSplit[letter].substr(1);
  }

  return titleSplit.join(" ")
}