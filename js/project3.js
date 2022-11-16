let latinPhrases = [
    "Consuetudo est altera natura", 
    "Nota bene", 
    "Nulla calamitas sola", 
    "Per aspera ad astra", 
    "Quid quid latine dictum sit, altum viditur"];
let rusPhrases = [
    "Привычка - вторая натура",  
    "Заметьте хорошо!", 
    "Беда не приходит одна", 
    "Через тернии к звёздам", 
    "Всё, что сказано на латыни, звучит как мудрость"];
let order = [0, 1, 2, 3, 4];


// Перемешиваем массив перед началом
shuffle(order);
// console.log(order);
latinPhrases = reorderArray(order, latinPhrases);
latinPhrasesCopy = Array.from(latinPhrases);
rusPhrases = reorderArray(order, rusPhrases);
rusPhrasesCopy = Array.from(rusPhrases);
// console.log(latinPhrases);
// console.log(rusPhrases);
phrasesContainerElement = document.getElementById("phrasesContainer");
let phrasesLeft = order.length - 1;



//ФУНКЦИИ

// Создать фразу
function createPhrase() {
    
    // latinPhrases = [];
    if (rusPhrases.length == 0) {
        document.getElementById("phrasesEndedWarning").style.visibility = "visible";
        return;
    }

    let phrase = rusPhrases.pop();
    // console.log(phraseElement);
    // console.log(phrasesContainerElement);
    let phraseElement = getPhraseElement(phrase); 
    phrasesContainerElement.appendChild(phraseElement);
    
    phrasesLeft--;

    // let phraseTranslationIndex = Math.floor(Math.random() * phrasesPool.length);
    // let phrase = new Phrase(++phrasesCounter, phrasesPool[phraseTranslationIndex], phraseElement);
    // unsortedPhrases.push(phrase);
    // phrasesPool.splice(phraseTranslationIndex, 1);

    // dynamicZoneElement.appendChild(phraseElement);
}

//
function getPhraseElement(somePhrase) {
    let phraseElement = document.createElement("div");
    phraseElement.textContent = somePhrase;
    phraseElement.setAttribute("class", "phrase");
    phraseElement.setAttribute("isDown", "no");
    phraseElement.setAttribute("onClick", "onPhraseClick(this)");
    phraseElement.setAttribute("order", phrasesLeft);


    phraseElement.style.marginLeft = `${Math.floor(Math.random() * 60)}%`;
    
    phraseElement.style.backgroundColor = "white";
    phraseElement.style.marginTop = "5px";
    phraseElement.style.marginBottom = "5px";
    // phraseElement.style.display = "inline-block";
    phraseElement.style.width = "max-content";

    return phraseElement;
}

let pixelsFromBottom = 10;

function onPhraseClick(phraseElement) {
    // console.log(phraseElement);
    // console.log(phraseElement.getAttribute('order'));
    let order = Number(phraseElement.getAttribute('order'));
    let translation = latinPhrases[order];
    // console.log(translation);
    phraseElement.textContent = translation;
    phraseElement.setAttribute("isDown", "yes");
    // console.log('clicked' + phraseElement. );
    
    // sortPhrase(clickedPhrase);
    makeBig();
    moveDown();

    // console.log(phraseElement.getBoundingClientRect().top);
}



function colorPhrase(){
    console.log(phrasesContainerElement.childNodes);
    for (var i = 1; i < phrasesContainerElement.childNodes.length; i++) {
        node = phrasesContainerElement.childNodes[i]
        // console.log( node );
        if(node.getAttribute('isdown') == 'yes'){
            node.style.backgroundColor = "blue";
        }
      }
}

// Тасование Фишера — Йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function reorderArray(order, array){
    helpArr = [];
    for (let i = 0; i < array.length; i++) {
        helpArr.push(array[order[i]]);
    }
    // console.log(helpArr);
    array = Array.from(helpArr);
    return array;
    // console.log(array);
}