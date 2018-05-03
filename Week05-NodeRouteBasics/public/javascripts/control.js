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

window.onload = function() {
    $("#search").click(callServerWithoutParms)
};

