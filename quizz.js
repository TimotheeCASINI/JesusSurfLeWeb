const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const qst_content = document.getElementById('question-container');

var audio = new Audio('alleluia-vivaldi_.mp3');

var questionElement = document.getElementById('question');
var rep_btn_Element = document.getElementById('reponse-btn');
var nombre = document.getElementById('nombre');


var icn = document.getElementById('icon');
console.log(document.getElementById('btn_cado'));
var i = document.getElementById("txt");

let random, actuel;

var compteur = 0;
var nbr = 10;

const question = 
[
	{
		qst: 'Qui a baptisé Jésus ?',
		rep:[
			{ text: "Marie", correct: false },
			{ text: "Joseph", correct: false },
			{ text: "Son cousin Jean", correct: true },
			{ text: "Matthieu", correct: false }
			],
		info: "Il fait partie de sa famille."

	},
	{
		qst: 'Combien y a-t-il d’évangiles canoniques ?',
		rep:[
			{ text: "3", correct: false },
			{ text: "4", correct: true },
			{ text: "5", correct: false },
			{ text: "2", correct: false }
		],
		info: "C'est un multiple de 2"
	},
	{
		qst: 'Qui a vu Jésus en premier après sa résurrection ?',
		rep:[
			{ text: "Pierre", correct: false },
			{ text: "Poncepilate", correct: false },
			{ text: "Marie Madeleine", correct: true },
			{ text: "Barthelemy", correct: false }
		],
		info: "Marcel Proust l'adore !"
	},
	{
		qst: 'Combien y a-t-il de lettres dans l’épitre de Paul ?',
		rep:[
			{ text: "3", correct: false },
			{ text: "13", correct: true },
			{ text: "23", correct: false },
			{ text: "33", correct: false }
		],
		info: "Ce n'est pas un nombre premier."
	},
	{
		qst: '« Car la lettre tue mais l’esprit … » (Epitre de St Paul aux corinthiens, IIe, III, 6)',
		rep:[
			{ text: "Endort", correct: false },
			{ text: "Venge", correct: false },
			{ text: "Transcende", correct: false },
			{ text: "Vivifie", correct: true }
		],
		info: "Cherche au fond de toi et tu trouvera !"
	},
	{
		qst: 'Combien de résurrection Jésus fait-il dans la Bible (sans compter la sienne) ?',
		rep:[
			{ text: "3", correct: true },
			{ text: "2", correct: false },
			{ text: "5", correct: false },
			{ text: "1", correct: false }
		],
		info: "C'est l'âge de Jésus divisé par 11"
	},
	{
		qst: 'Qui est le « disciple bien-aimé » de Jésus ?',
		rep:[
			{ text: "Paul", correct: false },
			{ text: "Matthieu", correct: false },
			{ text: "Judas", correct: false },
			{ text: "Pierre", correct: true }
		]
		,info: "On l'appel Kephas en Araméen."
	},
	{
		qst: 'Quelle est la ville de naissance de Jésus ?',
		rep:[
			{ text: "Jérusalem", correct: false },
			{ text: "Bethlehem", correct: true },
			{ text: "Canaan", correct: false },
			{ text: "Roubaix", correct: false }
		]
		,info: "Ce n'est pas le même lieu que sa mort."
	},
	{
		qst: 'Combien de fois Pierre nia connaitre Jésus ?',
		rep:[
			{ text: "1 fois", correct: false },
			{ text: "2 fois", correct: false },
			{ text: "3 fois", correct: true },
			{ text: "4 fois", correct: false }
		]
		,info: "Un chiffre qui revient souvent ..."
	},
	{
		qst: 'Qui étaient présent durant la transfiguration de Jésus ?',
		rep:[
			{ text: "Pierre, Marie et Marie Madeleine", correct: false },
			{ text: "Jaques, Mathieu et Jean", correct: false },
			{ text: "Marie, Mathieu et Jacques", correct: false},
			{ text: "Jean, Pierre et Jacques", correct: true }
		],
		info: 'Les trois réunis forment un nom composé.'
	},
]



start.addEventListener('click', startQuizz);
next.addEventListener('click', () => 
{
	actuel ++;
	nextQuestion()
})


function startQuizz()
{
	document.getElementById('btn_cado').style.visibility = "hidden";
	document.getElementById('icon').style.display = "none";
	console.log("yo");
	start.classList.add('hidden');
	nombre.innerText = compteur;
	random = question
	console.log(Math.floor(Math.random() * Math.floor(5)));
	actuel = 0;
	qst_content.classList.remove('hidden');
	nombre.classList.remove('nombre2')
	nextQuestion();

}


function nextQuestion()
{
	reset()
	/*questionElement.innerText = random[actuel].qst*/
	show(random[actuel])


}

function show(question)
{
	questionElement.innerText = question.qst/*on recupère le contenue de la question*/
	i.innerText = question.info;


	/*pour chaque rep on récup le text et on l'ajoute dans un element button*/
	question.rep.forEach(rep => 
	{
		const bouton = document.createElement('button')
		console.log(bouton)
		console.log(rep.text)
		bouton.innerText = rep.text
		bouton.classList.add('btn')
		/*Si la reponse est correct on determine son conteneur button comme correct*/
		if (rep.correct)
		{
			bouton.dataset.correct = rep.correct
		}
		/*ecouteur d'evenement */
		bouton.addEventListener('click', selectRep)
		/*on ajoute les boutons dans le conteneur de boutons*/
		rep_btn_Element.appendChild(bouton)
	})
}

function reset()
{
	next.classList.add('hidden');
	while (rep_btn_Element.firstChild)
	{
		rep_btn_Element.removeChild(rep_btn_Element.firstChild)
	}
}


function selectRep(e)
{
	const select_btn = e.target /*correspond au boouton choisi*/
	console.log(select_btn)

	const correct = select_btn.dataset.correct
	if (correct)
	{
		compteur ++;
	}
	nombre.innerText = compteur;


	ModifClass(document.body, correct)

	Array.from(rep_btn_Element.children).forEach(button => 
	{
		ModifClass(button, button.dataset.correct)
	})
	if (nbr-1 > actuel)
	{
		next.classList.remove('hidden');
	}
	else
	{
		if(compteur == 10)
		{
			
			document.getElementById('btn_cado').style.visibility = "visible";
            nombre.classList.add('nombre2');

		}
		compteur = 0;
		start.innerText = "Rejouer  ";
		/*icn.classList.toggle("fa-pause-circle");*/
		start.classList.remove('hidden')
	}
	
}

function ModifClass(element, correct)
{
	ClearClass(element)
	if (correct)
	{
		element.classList.add('correct');
	}
	else
	{
		element.classList.add('wrong');
	}
}

function ClearClass(element)
{
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

function noshow()
{
	audio.pause();
	document.getElementById("maincontainer").style.display="none";  
	document.getElementById("card").style.display="none";
	document.getElementById("front").style.display="none";  


	return true;
}
function show_cado() 
{
	audio.play();
	document.getElementById("maincontainer").style.display="block";  
	document.getElementById("card").style.display="block";
	document.getElementById("front").style.display="block";
	return true;
}