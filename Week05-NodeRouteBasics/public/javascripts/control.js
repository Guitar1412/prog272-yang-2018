function callServerWithoutParms() {

    //search();

    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
           console.log(response);
           $("#displaySearch").html(JSON.stringify(response, null, 4));
        })
        .catch((ex) => {
            console.log(ex);
        })

};

function feetInMile(){
    fetch('/getFeetInMile')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displayFeetInMile").html(JSON.stringify(response, null, 4));
        })
        .catch((ex) => {
            console.log(ex);
        })
}


function feetFromMile(){
    const userMiles = document.getElementById('userInput').value;
    fetch('/calculateFeetFromMiles' + '?miles=' + userMiles)
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(ex => {
            console.log(ex);
        });
}

window.onload = function() {
    $("#search").click(callServerWithoutParms);
    $("#getFeetInMile").click(feetInMile);
    $("#calculateFeetFromMiles").click(feetFromMile);
};

