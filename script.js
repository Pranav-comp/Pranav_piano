window.addEventListener("keydown", (e) => handleKeyPress(e));
const handleKeyPress = (e) => {
  console.log(e.which);
  switch (e.which) {
    case 65:
      playA4();
      break;
    case 83:
      playB4();
      break;
    case 68:
      playC4();
      break;
    case 70:
      playC5();
      break;
  }
};

//JavaScript file
	//Sound Play
	const C4 = new Audio("sounds/C4.mp3");
	const Db4 = new Audio("sounds/Db4.mp3");
	const D4 = new Audio("sounds/D4.mp3");
	const Eb4 = new Audio("sounds/Eb4.mp3");
	const E4 = new Audio("sounds/E4.mp3");
	const F4 = new Audio("sounds/F4.mp3");
	const Gb4 = new Audio("sounds/Gb4.mp3");
	const G4 = new Audio("sounds/G4.mp3");
	const Ab4 = new Audio("sounds/Ab4.mp3");
	const A4 = new Audio("sounds/A4.mp3");
	const Bb4 = new Audio("sounds/Bb4.mp3");
	const B4 = new Audio("sounds/B4.mp3");
	const C5 = new Audio("sounds/C5.mp3");
	const Db5 = new Audio("sounds/Db5.mp3");
	const D5 = new Audio("sounds/D5.mp3");
	const Eb5 = new Audio("sounds/Eb5.mp3");
	const E5 = new Audio("sounds/E5.mp3");


	const playSound = audio => {
  		const clone = audio.cloneNode();
  		clone.play(); 
	};


// C4
	const C4Key = document.querySelector(".C4-key");
	const playC4 = () => {
  		playSound(C4);
	};
	C4Key.addEventListener("click", playC4);

// Db4
	const Db4Key = document.querySelector(".Db4-key");
	const playDb4 = () => {
  		playSound(Db4);
	};
	Db4Key.addEventListener("click", playDb4);

// D4
	const D4Key = document.querySelector(".D4-key");
	const playD4 = () => {
  		playSound(D4);
	};
	D4Key.addEventListener("click", playD4);

// Eb4
	const Eb4Key = document.querySelector(".Eb4-key");
	const playEb4 = () => {
  		playSound(Eb4);
	};
	Eb4Key.addEventListener("click", playEb4);

// E4
	const E4Key = document.querySelector(".E4-key");
	const playE4 = () => {
  		playSound(E4);
	};
	E4Key.addEventListener("click", playE4);

// F4
	const F4Key = document.querySelector(".F4-key");
	const playF4 = () => {
  		playSound(F4);
	};
	F4Key.addEventListener("click", playF4);

// Gb4
	const Gb4Key = document.querySelector(".Gb4-key");
	const playGb4 = () => {
  		playSound(Gb4);
	};
	Gb4Key.addEventListener("click", playGb4);

// G4
	const G4Key = document.querySelector(".G4-key");
	const playG4 = () => {
  		playSound(G4);
	};
	G4Key.addEventListener("click", playG4);

// Ab4
	const Ab4Key = document.querySelector(".Ab4-key");
	const playAb4 = () => {
  		playSound(Ab4);
	};
	Ab4Key.addEventListener("click", playAb4);

// A4
	const A4Key = document.querySelector(".A4-key");
	const playA4 = () => {
  		playSound(A4);
	};
	A4Key.addEventListener("click", playA4);

// Bb4
	const Bb4Key = document.querySelector(".Bb4-key");
	const playBb4 = () => {
		playSound(Bb4);
	};
	Bb4Key.addEventListener("click", playBb4);

// B4
	const B4Key = document.querySelector(".B4-key");
	const playB4 = () => {
  		playSound(B4);
	};
	B4Key.addEventListener("click", playB4);

// C5
	const C5Key = document.querySelector(".C5-key");
	const playC5 = () => {
  		playSound(C5);
	};
	C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
	const playDb5 = () => {
  		playSound(Db5);
	};
	Db5Key.addEventListener("click", playDb5);

// D5
	const D5Key = document.querySelector(".D5-key");
	const playD5 = () => {
  		playSound(D5);
	};
	D5Key.addEventListener("click", playD5);

// Eb5
	const Eb5Key = document.querySelector(".Eb5-key");
	const playEb5 = () => {
  		playSound(Eb5);
	};
	Eb5Key.addEventListener("click", playEb5);

// E5
	const E5Key = document.querySelector(".E5-key");
	const playE5 = () => {
	  	playSound(E5);
	};
	E5Key.addEventListener("click", playE5);

/*Change the Theme*/
	var white_buttons = document.getElementsByClassName('white-key');
	var black_buttons = document.getElementsByClassName('black-key');
	

	//Choice 1
	function theme(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var white_key = "rgb(" + r + "," + g + "," + b + ")";
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		
		var black_key = "rgb(" + r + "," + g + "," + b + ")";
		//loops
		for(let i = 0;i<white_buttons.length;i++){
			white_buttons[i].style.backgroundColor = white_key;
		}
		for(let i = 0;i<black_buttons.length;i++){
			black_buttons[i].style.backgroundColor = black_key;
		}
	}
	

	//Choice 2
	function original(){
		for(let i = 0;i <white_buttons.length;i++){
			white_buttons[i].style.backgroundColor = "white";
			white_buttons[i].style.borderColor = "black";
		}
		for(let i = 0;i <black_buttons.length;i++){
			black_buttons[i].style.backgroundColor = "black";
		}
	}

	
