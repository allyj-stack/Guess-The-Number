let bttnSubmit = document.getElementById('Submit');
let bttnClear = document.getElementById('Clear');
let txt = document.getElementById('Display');
let usr = document.getElementById('usrGuess');
let txtFinish = document.getElementById('DisplayFinish');

let guess = 0;
let randomNum = Math.floor(Math.random() * 100);

bttnSubmit.addEventListener('click', function(){
	guess = parseInt(usr.value);
	if(guess > randomNum){
		txt.textContent = 'Lower';
	} else if(guess < randomNum){
		txt.textContent = 'Higher';
	} else{
		txt.textContent = ' ';
		txtFinish.classList.add('celebrate');
	}
})
console.log(randomNum);

bttnClear.addEventListener('click', function(){
	txt.textContent = ' ';
	usr.value = 1;
})
