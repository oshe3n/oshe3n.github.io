
const baseAPI='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=UUwafG7DfOibd4Ou5926puFQ&key=AIzaSyC4Bx68UyfZJ7YymFw-hQkwJPy4z8_6J68';

var videoCard={
    
}

$(document).ready(function(){
    //$('#content-container').append('<h2>HELLO WORLD</h2>');
    $.get( baseAPI, function( data ) {
        //dataJSON=JSON.parse(JSON.stringify(data));
        console.log(data['items'])
      });
});

function AddVideoToParent(){

}
