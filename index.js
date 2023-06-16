// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
let newarry = cats.push('Ralph');
return newarry;
}
function destructivelyPrependCat() {
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();
    return cats
}
function  destructivelyRemoveFirstCat(){
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();
    return cats
}
function appendCat (){
    cats.push('Milo', 'Otis', 'Garfield')
    let catsappend = [...cats];
    catsappend.push('Broom')
    return cats
}
function prependCat (){
    cats.push('Milo', 'Otis', 'Garfield')
    let catspreappend = [...cats];
    catspreappend.unshift('Arnold')
    return cats
}
function removeLastCat(){
    cats.push('Milo', 'Otis', 'Garfield')
    let catremovelast =[...cats]
    catremovelast.pop();
    return cats
}
function removeFirstCat(){
    cats.push('Milo', 'Otis', 'Garfield')
    let catremovelast =[...cats]
    catremovelast.shift();
    return cats
}