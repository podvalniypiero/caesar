
  "use strict";
  window.CeasarsCipher = function(input){
        
    let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase(), //алфавит полностью rus 33 буквы
    //let alphabet = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase(), //алфавит без Й
    //let alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()//алфавит без Ё
    //let alphabet = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase(), //алфавит без Й и без Ё

    //let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(), // en
        
        shiftAmount,
        shiftedAlphabet = "",
        OUTPUT = "",
        STRING,
        otherCharacters = '-+=~\"\'#$%&*^:;±§`_№@<>?/!{(|)}.1234567890\, ' // НЕ БУКВА  => сдвигать не будем, просто вывод

    let alphabetLength = alphabet.length;
    console.log(alphabetLength);
    
    if(typeof input === "object")
    {
      shiftAmount = input.shift % (alphabet.length);
      STRING = input.msg.toLowerCase();
    } 
    else 
    {
      return;
    }
    
    if(typeof STRING === "string" || typeof (STRING+"") === "string")
    {
      
        shiftedAlphabet = alphabet.slice(shiftAmount);
        shiftedAlphabet += alphabet.slice(0, shiftAmount);
        shiftedAlphabet += otherCharacters;
        alphabet += otherCharacters;
  
      for(let i = 0; i < STRING.length; i++)
      {
          let numberd = alphabet.indexOf(STRING[i])
          OUTPUT += shiftedAlphabet[numberd];
      }
    } else 
    {
      return;
    };
    
    return OUTPUT;
  };

  document.getElementById("message").addEventListener("input", function(){
    let itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
      msg: itsValue,
      shift: document.getElementById("shift").value
    });
  });

  document.getElementById("shift").addEventListener("keyup", function(alphabet){
    let itsValue = this.value;

 
    // if (itsValue > alphabet.length){
    //   itsValue = (itsValue - (alphabet.length));
    //   console.log(itsValue);
    // }
    // if ((itsValue < 0)|| !isNaN(itsValue)) {
    //   alert('Смещение должно быть неотрицательным числом!')
    // }
    
    document.getElementById("output").textContent = CeasarsCipher({
      msg: document.getElementById("message").value,
      shift: itsValue
    })
  });
  
  document.getElementById("output").textContent = CeasarsCipher({
      msg: document.getElementById("message").value,
      shift: document.getElementById("shift").value
    });



