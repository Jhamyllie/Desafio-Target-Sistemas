let originalString = "Jamile Santana";

function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

// Outros testes

// originalString = "Carrinho de mão";
// originalString = "Javascript"
// originalString = "pessoa"
// originalString = "Sou fã de animes"
// originalString = "Desenvolvimento de Software"
// originalString = "Casa";

const invertedString = reverseString(originalString);
console.log("String original:", originalString);
console.log("String invertida:", invertedString);
