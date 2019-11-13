$(document).ready( onReady );

function onReady(){
    console.log('js');

    $.ajax({
        method: 'GET',
        url: '/cohorts'
    }).then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(`Error on request to server`, error);
        alert('Something went wrong');
    })
}