
  "use strict";
  window.CeasarsCipher = function(input){
        
    let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()  //алфавит полностью rus 33 буквы ДЕФОЛТ

    // let alphabet1 = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()  //алфавит полностью rus 33 буквы
    // let alphabet2 = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й
    // let alphabet3 = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Ё
    // let alphabet4 = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й и без Ё

    let checkChoice = document.querySelector('input[name="alphabet"]:checked');

			console.log(checkChoice.value);
      console.log(checkChoice.id);

      async function radioCheck(){
      try{
			if((checkChoice.id) === "one") {
        alphabet =  "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()  //алфавит полностью rus 33 буквы
        console.log(alphabet);
		  }
      else if ((checkChoice.id) === "two") {
        alphabet =  "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й
        console.log(alphabet);
		  }
      else if ((checkChoice.id) === "three") {
      alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Ё
      console.log(alphabet);
      }
      else if ((checkChoice.id) === "four") {
      alphabet = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й и без Ё 
      console.log(alphabet);
      }
      }catch(err){
       alert("Не удалось выбрать вариант алфавита...")
      }


    }
    radioCheck();

    let alphabetEn = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(), // en
        
        shiftAmount,
        shiftedAlphabet = "",
        OUTPUT = "",
        STRING,
        otherCharacters = '-+=~\"\'#$%&*^:;±§`_№@<>?/!{(|)}.1234567890\, ' // НЕ БУКВА  => сдвигать не будем, просто вывод


    let alphabetLength = alphabet.length;
    console.log(alphabetLength);
    
    console.log(isNaN(input.shift));
    if (isNaN(input.shift)){
      Swal.fire({
        title: 'Шаг должен быть числом!',
        text: "попробуйте снова...",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Закрыть',
        showConfirmButton: false, 
        cancelButtonColor: 'rgb(64, 60, 60);',
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

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
    
    document.getElementById("output").textContent = CeasarsCipher({
      msg: document.getElementById("message").value,
      shift: itsValue
    })
  });
  
  document.getElementById("output").textContent = CeasarsCipher({
      msg: document.getElementById("message").value,
      shift: document.getElementById("shift").value
    });

    // обработка radio
  //   function choice(){
  //     let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()  //алфавит полностью rus 33 буквы ДЕФОЛТ

  //     let alphabet1 = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase()  //алфавит полностью rus 33 буквы
  //     let alphabet2 = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й
  //     let alphabet3 = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Ё
  //     let alphabet4 = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase() //алфавит без Й и без Ё

	// 		let checkChoice = document.querySelector('input[name="alphabet"]:checked');
	// 		console.log(checkChoice.value);
  //     console.log(checkChoice.id);
	// 		if((checkChoice.id) === "one") {
  //       console.log('first');
  //       let alphabet = alphabet1;
	// 	  }
  //     else if ((checkChoice.id) === "two") {
  //       console.log('second');
  //       let alphabet = alphabet2;
	// 	  }
  //   else if ((checkChoice.id) === "three") {
  //     console.log('third');
  //     let alphabet = alphabet3;
  //   }
  //   else if ((checkChoice.id) === "four") {
  //   console.log('fourth');
  //   let alphabet = alphabet4; 
  //   }

  // }


