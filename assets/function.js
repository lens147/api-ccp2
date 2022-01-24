document.querySelector('#text').addEventListener("keyup", function show(e) {
    let user_input = document.querySelector('#text');
    document.querySelector("#trad").innerText = user_input.value;

})
function change() {
    document.getElementById("trad").id="text";

    console.log(TextTrad);
}
    let langue = navigator.language;
    console.log(langue);

document.querySelector('#monselect').addEventListener("change", function callback(langue) {
    
    let apiKey = "a6376862-0c42-4601-9ae9-7dbd02e944fb";

    langue = document.querySelector("#monselect").value;
    let query = document.querySelector("#text").value;
    let lang = document.querySelector("#langAtraduire").value;

    let url = `https://api-translate.systran.net/translation/text/translate?key=${apiKey}&input=${query}&target=${langue}&source=${lang}`;

    console.log(url);

    fetch(url, {
        method: "POST",
        body: JSON.stringify()
            
        })
        .then((response) => 
        response.json())
        .then ((data)=> {
            document.querySelector("#trad").innerText = data.outputs[0].output;
        })

    .catch(err => console.log('Erreur : ' + err))
})


