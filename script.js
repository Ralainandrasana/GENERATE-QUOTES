function quotes(author, quote){
	this.author=author;
	this.quote=quote;
}

const QUOTES=[new quotes("Rene Descartes","Je pense, donc je suis"),
	new quotes("Protagoras","L'homme est la mesure de toutes choses"),
	new quotes("Friedrich Nietzsche","Dieu est mort"),
	new quotes("Socrate","La vie sans examen ne vaut pas la peine d'être vécue")];

//VARIABLE
const quoteEl=document.querySelector(".quote");
const authorEl=document.querySelector(".author");
const bouton=document.querySelector(".bouton");
var oldNbRand=0,interval;

bouton.addEventListener("click",function(){
	clearInterval(interval);
	randQuote(quoteEl,authorEl);
})

//FONCTION
function randQuote(qEl,aEl){
	var nbRand=random(0,QUOTES.length-1);
	animWrite(qEl,aEl,QUOTES[nbRand].quote,QUOTES[nbRand].author);
}

function random(min,max){
	var nb=Math.floor(Math.random()*(max-min+1)+min);
	while(nb==oldNbRand){
		nb=Math.floor(Math.random()*(max-min+1)+min);
	}
	oldNbRand=nb;
	return nb;
}
function animWrite(qEl,aEl,quote,author){
	var i=0;
	qEl.innerHTML="";
	aEl.innerHTML=author;
	aEl.style.visibility="visible"
	interval=setInterval(function(){
		if(i>=quote.length){
			clearInterval(interval);
		}
		else{
			qEl.innerHTML+=quote[i];
			i++;
		}
	},150);
}
console.log("hello");
