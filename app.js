let word = ["apple", "banana", "orange"];
let consonants = 0;
let vowels = 0;

for (let i of word) {
    for (let buk of i) {
        if (buk == "e" || buk == "y" || buk == "i" || buk == "u" || buk == "o" || buk == "a" ||
            buk == "E" || buk == "Y" || buk == "I" || buk == "U" || buk == "O" || buk == "A") {
            vowels += 1;
        } else {
            consonants += 1;
        }
    }
}

alert(`vowels: ${vowels} consonants: ${consonants}`);