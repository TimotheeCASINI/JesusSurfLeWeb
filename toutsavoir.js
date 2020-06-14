function noshow()
{
	document.getElementById("maincontainer").style.display="none";  
	document.getElementById("card").style.display="none";
	document.getElementById("front").style.display="none";  


	return true;
}

function affichage(x)
{
	var image = new Image();
	/*var t = document.getElementById("texte");
	var p = document.createElement("p");
	var t = document.getElementById("content_text")*/

	//Saint Simon-Pierre n°1
	if (x === 1)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 5;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/02/saint-simon-saint-pierre.jpg";

	
		var txt = document.getElementById("content_text").innerHTML = "(...) je te dis que tu es Pierre, et sur cette pierre je bâtirai mon assemblée. Je te donnerai les clefs du Royaume des cieux. Ce que tu lieras sur la terre sera lié dans les cieux, et ce que tu délieras sur la terre sera délié dans les cieux.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Ier siècle Av J.C";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;64-68 Ap J.C";


		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}

	//Saint André n°2
	else if (x == 2)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}
		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/02/saint-andre.jpg";

		var txt = document.getElementById("content_text").innerHTML ="Voici l’Agneau de Dieu », dit Jean le Baptiste en voyant Jésus (Jn 1, 41), et André quitte aussitôt le premier pour suivre le second jusque chez lui. Accompagné d’un autre homme dont le nom est inconnu, il croise alors son frère Simon — qui ne s’appelle pas encore Pierre — et lui déclare avec assurance : « Nous avons trouvé le Messie ».";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Ier siecle à Bethsaïde";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Ier siècle à Patras";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	//Saint Jacques n°3
	else if (x == 3)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 3;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/03/saint-jacques.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Mais soyez les réalisateurs de la parole, et pas seulement des auditeurs qui s'abuseraient eux-mêmes. En effet, si quelqu'un écoute la parole et ne la réalise pas, il ressemble à un homme qui observe dans un miroir le visage qu'il a de naissance : il s'est observé, il est parti, il a tout de suite oublié de quoi il avait l'air. Mais celui qui s'est penché sur une loi parfaite, celle de la liberté, et s'y est appliqué, non en auditeur distrait, mais en réalisateur agissant, celui-là trouvera le bonheur dans ce qu'il réalisera (...).";

		
		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Ier siècle en Galilé";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;1er tiers du IIème siècle";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}

	//Saint Jean n°4
	else if (x == 4)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/04/saint-jean.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Après les autres disciples, Jean, le disciple du Seigneur qui reposa sur sa poitrine, donna lui aussi sa version de l’évangile comme il séjournait à Ephese. (...) C'est le disciple que Jésus aimait.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;10 Ap J.C en Bethsaïde";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Vers 100 à Ephèse";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}

	//Saint Phillipe n°5
	else if (x == 5)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 3;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/04/saint-philippe.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Nous devons chercher le Christ là où Il n'est pas, c'est-à-dire dans la Croix et dans les épreuves, où Il n'est effectivement pas maintenant, mais nous Le trouverons dans Sa gloire si nous Le cherchons sur ce chemin.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Début du 1er siècle";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;En 62 à Hiérapolis";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	//Saint Barthélémy n°6
	//Présenté à Jésus par l’apôtre Philippe, on ne le trouve que dans l’évangile selon Jean. Selon ses mots, le Christ le considère comme « un vrai fils d’Israël, un homme qui ne sait pas mentir. » Lorsque Nathanaël lui demande comment le Christ le connaît, celui-ci répond « Avant que Philippe te parle, quand tu étais sous le figuier, je t’ai vu ». Sans savoir ce qui s’est réellement passé sous ce figuier, il est évident qu’il s’agit d’un moment crucial dans la vie de Nathanaël qui se sent compris par Jésus, cet homme qui sait tout de lui. Il décide alors de s’abandonner à lui.
	else if (x == 6)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 3;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/04/saint-Barthelemy.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Mentionné dans toutes les listes des douze apôtres, il ne joue pourtant aucun rôle dans les évangiles ni dans les actes des apôtres. C’est plutôt la légende qui s’est emparée de lui. Après la Pentecôte, il serait parti prêcher l’évangile en Arabie, en Mésopotamie puis en Inde. Il est dit que « son zèle et ses prodiges eurent tôt fait de changer la face de ces contrées ; non seulement il converti les foules, mais il ordonna des Prêtres pour le seconder et consacra des Évêques. » Il y aurait même apporté l’Évangile de Saint Matthieu.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;1er siècle en Judée";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;1er siècle en Arménie";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}

	//Saint Thomas n°7
	else if (x == 7)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 2;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/04/saint-thomas.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Si je ne vois pas dans ses mains la marque des clous, si je ne mets pas mon doigt dans la marque des clous, si je ne mets pas la main dans son côté, non, je ne croirai pas !";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Vers le 1er siècle en Galilée";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;3 juillet 72 à Mylapore";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	//Saint matthieu n°8
	else if (x === 8)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/04/Saint-Matthieu.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Il est plus aisé pour un chameau de passer par le trou d'une aiguille que pour un riche d'entrer dans le royaume de Dieu.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Vers le 1er siècle en Galilée";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;En 71 en Ethiopie";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}


	//Saint Jacques Le mineur n°9
	//Jacques le Mineur est également surnommé « le Juste », eu égard pour l’intégrité de sa vie. Né en Galilée, il est appelé par Jésus alors qu’il forme son fameux groupe des 12. Après la Pentecôte, il s’établit à Jérusalem dont il devient le premier évêque. Saint Paul parle de lui comme d’une « colonne » de cette Église. Mais les nombreuses conversions au christianisme lui attirent ennuis et jalousie. 
	else if (x == 9)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/05/jacques-le-mineur.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Jésus monte dans la montagne et il appelle ceux qu'il voulait. Ils vinrent à lui et il en établit douze pour être avec lui et pour les envoyer chasser les démons. Pierre, c'est le surnom qu'il a donné à Simon, Jacques, le fils de Zébédée et Jean, le frère de Jacques, et il leur donna le surnom de Bonaerguès, c'est-à-dire fils du Tonnerre, André, Philippe, Barthélémy, Matthieu, Thomas, Jacques le fils d'Alphée, Thaddée, Simon le zélote et Judas Iscartioth, celui-là même qui le livra.";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Peu avant le 1er siècle";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;En 62 à Jérusalem";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	//Saint Jude n°10
	//Saint Jude — qu’il ne faut pas confondre avec Judas Iscariot, comme le précisent les évangélistes — n’est pas le plus illustre des apôtres. Disciple discret, il est l’auteur d’une courte lettre qui clôt la série d’épîtres du Nouveau Testament. Mais il est davantage connu pour la seule parole qu’il prononce dans les Évangiles : une question frappante adressée au Christ dans l’évangile selon saint Jean
	else if (x == 10)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://aleteiafrench.files.wordpress.com/2017/10/web3-aint-of-apostle-saint-jude-thaddeus-shutterstock_145315309.jpg?quality=100&strip=all";

		var txt = document.getElementById("content_text").innerHTML = "Jésus annonce à ses disciples l’imminence de son départ : « C’est pour peu de temps encore que je suis avec vous » (Jn 13, 1). Les hommes sont interloqués : où va-t-Il ? Comment suivre ses commandements s’Il quitte ce monde ? Leur maître les rassure : « D’ici peu de temps, le monde ne me verra plus, mais vous, vous me verrez vivant ». C’est alors que Jude demande : « Seigneur, que se passe-t-il ? Est-ce à nous que tu vas te manifester, et non pas au monde ? »";


		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Début du 1er siècle";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Vers 62";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	// Saint Simon n°11
	//imon le Zélote ou saint Simon le Cananéen est un juif probablement originaire de Béthanie (village de Judée). Il est le 8ème apôtre de Jésus mais également le plus âgé. Il est surnommé « le Zélote » par Luc et « le Cananéen » par Mattieu et Marc, ce qui permet de le distinguer de l’apôtre Simon-Pierre. On présume qu’il serait un ancien zélote c’est-à-dire faisant partie d’un groupe extrémiste du Ier siècle, incitant les judéens à se rebeller activement contre l’Empire Romain. Si ce n’est pas le cas, ce surnom lui aurait peut-être été attribué en raison du caractère exclusif dont il fait preuve concernant la religion.Avec le Christ, Simon le Zélote découvrit l’universalité de l’amour de Dieu. Il sera d’ailleurs témoin de plusieurs étapes dans la vie de Jésus : la Cène, mais aussi de la Résurrection, l’Ascension puis la Pentecôte.
	//amis de jude et frere de jésus
	else if (x == 11)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 4;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/05/Simon-le-Zelote-1.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Jésus, s’exprimant à Simon et à Jude aurait dit « Viens, Simon qui n’as pas eu de fils. Viens Jude, qui perd ton père pour mon amour. Je vous unis dans un même sort », liant ces deux amis.";

	

		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Début du 1er siècle";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Fin du 1er siècle";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	//juda
	else if (x == 12)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 1;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://img.aws.la-croix.com/croire/2018/06/18/1700948081/baiser-Judas-Cimabue-1240-1302-fresque-basilique-Saint-Francois-Assise-Italie_0_716_504.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Pris de remords, il rapporta les pièces d'argent aux grands prêtres et aux anciens, en disant : j'ai péché en livrant un sang innocent [...]. Alors, il se retira en jetant l'argent du côté du sanctuaire et alla se pendre.";




		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Courant 1er siècle Av J.C";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Jour de la mort de Jésus";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	else if (x == 13)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 5;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://img.aws.la-croix.com/croire/2019/04/11/1701014969/Portrait-saint-Paul-Auteur-inconnu_0_800_600.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Tandis que notre homme extérieur s'en va en ruine, notre homme intérieur se renouvelle de jour ne jour.";




		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Vers 8 Ap J.C";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;64 Ap J.C à Rome";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	else if (x == 14)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 5;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://img-4.linternaute.com/Du15Q2rS80Z-33sH93OJ2b3ZlY4=/1240x/smart/c31b409149eb4eb1980f18cc439000ab/ccmcms-linternaute/13717714.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Personne n'a jamais vu Dieu; si nous nous aimons les uns les autres, Dieu demeure en nous, et son amour est parfait en nous(…). Celui qui confessera que Jésus est le fils de Dieu, Dieu demeure en lui, et lui en Dieu. Et nous, nous avons connu l'amour que Dieu a pour nous, et nous y avons cru. Dieu est amour; et celui qui demeure dans l'amour, demeure en Dieu, et Dieu en lui.";




		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;En l'an 0";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;En l'an 33";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}

	else if (x == 15)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 5;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://www.amisdejesus.net/wp-content/uploads/2017/05/vierge.jpg";

		var txt = document.getElementById("content_text").innerHTML = "Et au sixième mois, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, nommée Nazareth, à une vierge, fiancée à un homme dont le nom était Joseph, de la maison de David; et le nom de la vierge était Marie.[...] Ne crains pas, Marie, car tu as trouvé grâce auprès de Dieu. Et voici, tu concevras dans ton ventre, et tu enfanteras un fils, et tu appelleras son nom Jésus.";




		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Aucune information dans les Saintes écritures";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Aucune information dans les Saintes écritures";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
	else if (x == 16)
	{
		for (j = 1; j < 6; j++)
		{
			var croix_none = document.getElementById("cross"+j);
			croix_none.style.color = "#979797";
		}

		var niveau = 5;

		image.onload = function()
		{
   			document.getElementById("img").src = image.src;
		}

		image.src = "https://img.aws.la-croix.com/croire/2001/05/28/1700864857/Saint-Joseph-Enfant-Jesus-Guido-Reni-1575-1642-Museum-Fine-Arts-Houston-Etats-Unis_0_1398_1032.jpg";
		var txt = document.getElementById("content_text").innerHTML = "Joseph aussi monta de la ville de Nazareth en Galilée à la ville de David qui s'appelle Bethléem en Judée, parce qu'il était de la famille et de la descendance de David…";




		document.getElementById("birth").innerHTML = "Naissance : &nbsp;&nbsp;Aucune information dans les Saintes écritures";
		document.getElementById("death").innerHTML = "Decès : &nbsp;&nbsp;Aucune information dans les Saintes écritures";

		for (i = 1; i < niveau+1; i++)
		{
			var croix = document.getElementById("cross"+i);
			croix.style.color = "#FFFB6E";
		}
	}
		document.getElementById("maincontainer").style.display="block";  
		document.getElementById("card").style.display="block";
		document.getElementById("front").style.display="block";  

		
		

}