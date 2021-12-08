//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','http://api.countrylayer.com/v2/lang/ta?access_key=d612564930cd61936df4e15c6dc1de58');

//3.Send a request
request.send();

//4.Data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    for (let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}
