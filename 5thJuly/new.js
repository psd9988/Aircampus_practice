// objects and datatypes

let fruits = ['apple', 'banana', 'cherry', 'durian', 'elderberry', 'fig', 'grape', 'honeydew', 'jackfruit', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'peach', 'pineapple', 'plum', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon', 'zucchini', 'chiku', 'grape', 'coconut'];

let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log(randomFruit);

let myUncle = {Name: 'John', 
Age: '50',
profession: 'Teacher',
hobbies: ['reading', 'cooking', 'playing'],
son: {Name: 'John',
Age: '20',
profession: 'Student',
hobbies: ['reading', 'travelling', 'coding']}

}

console.log(myUncle.son.hobbies[1]);