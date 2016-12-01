var url ='https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=e6d1523d4d6e45cbb203bf93a08ae0c6';
function setup() {
   createCanvas(700, 10);
   loadJSON(url, gotData);
}

function gotData(data){
  var names = data.results;
  for (var i=0; i < names.length; i++){
    createP(names[i].headline);
  }

  //print(data.results[1].headline);
}

function draw(){
  background(245);
  
}