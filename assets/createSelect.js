let apiKey = "a6376862-0c42-4601-9ae9-7dbd02e944fb";

fetch(`https://api-translate.systran.net/translation/supportedLanguages?key=${apiKey}`, {
	method: "GET",
	body: JSON.stringify()
	
	}).then((response) => 
	response.json().then ((data)=> {

	for (const tec in data.languagePairs) {						//langue à traduire

		let parent = document.querySelector("#monselect");
		let element = document.createElement("option");
		element.setAttribute("valeur",`${data.languagePairs[tec].target}`);
	// 	console.log(data.languagePairs[tec].target); 
		let templat = `${data.languagePairs[tec].target}`
		element.innerHTML = templat;
		element.classList.add("langATranslat");
		parent.appendChild(element);
	}

    for (const tec in data.languagePairs) {						//langue de traduction

		let parent = document.querySelector("#langAtraduire");
		let element = document.createElement("option");
		element.setAttribute("valeur",`${data.languagePairs[tec].target}`);
		let templat = `${data.languagePairs[tec].target}`
		element.innerHTML = templat;
		element.classList.add("langDeTraduction");
		parent.appendChild(element);
	}


	})
	).catch(err => console.log('Erreur : ' + err))