const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   // teu código vai aqui ... 
   document.getElementById("lettersDiv").innerText = "";
   document.getElementById("wordsDiv").innerText = "";

   const lettersDiv = document.getElementById("lettersDiv");
   const titleCountLetter = document.createElement("h2");
   titleCountLetter.innerHTML = "Number of letters";
   lettersDiv.appendChild(titleCountLetter);

   lettersCounts();

   const wordsDiv = document.getElementById("wordsDiv");
   const titleCountWord = document.createElement("h2");
   titleCountWord.innerHTML = "Number of words";
   wordsDiv.appendChild(titleCountWord);

   wordsCounts();
});

const lettersCounts = () => {
    // Descobre o que foi digitado na caixa de texto.
    let letterText = document.getElementById("textInput").value;

    // Isto muda todas as letras para minúsculas
    letterText = letterText.toLowerCase();
    
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos.
    letterText = letterText.replace(/[^a-z'\s]+/g, "");
 
    const letterCounts = {};
 
    for (let i = 0; i < letterText.length; i++) {
        let currentLetter = letterText[i];
         // faça algo com cada letra 
 
         if (letterCounts[currentLetter] === undefined) {
             letterCounts[currentLetter] = 1; 
          } else { 
             letterCounts[currentLetter]++; 
          }
     }
 
     for (let letter in letterCounts) { 
         const span = document.createElement("span"); 
         const textContent = `"${letter}": ${letterCounts[letter]}, `;
         span.innerText = textContent; 
         const letters = document.getElementById("lettersDiv");
         letters.appendChild(span); 
     }
};

const wordsCounts = () => {
      // Descobre o que foi digitado na caixa de texto.
      let wordText = document.getElementById("textInput").value;

      // Isto muda todas as letras para minúsculas
      wordText = wordText.toLowerCase();
      
      // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos.
      wordText = wordText.replace(/[^a-z'\s]+/g, "");

      // Separa a string de entrada em palavras e retorna um array.
      wordText = wordText.split(/\s/);
   
      const wordCounts = {};
   
      for (let i = 0; i < wordText.length; i++) {
          let currentWord = wordText[i];
           // faça algo com cada letra 
   
           if (wordCounts[currentWord] === undefined) {
               wordCounts[currentWord] = 1; 
            } else { 
               wordCounts[currentWord]++; 
            }
       }
   
       for (let word in wordCounts) { 
           const span = document.createElement("span"); 
           const textContent = `"${word}": ${wordCounts[word]}, `;
           span.innerText = textContent; 
           const words = document.getElementById("wordsDiv");
           words.appendChild(span); 
       }
};

const reset = document.getElementById("resetButton");
reset.addEventListener("click", function() {  
   document.getElementById("textInput").value = "";
   document.getElementById("lettersDiv").innerText = "";
   document.getElementById("wordsDiv").innerText = "";
});