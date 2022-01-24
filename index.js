let request = new XMLHttpRequest();
request.open( "GET" ,"https://jsonplaceholder.typicode.com/posts/1" );
request.send();
request.onload = () => {
    console.log(request);
    var text = "";
    if(request.status === 200){
        const data = JSON.parse(request.response);
        text = data.body;
        console.log(text);
    }
    else{
        console.log('error ${request.status} ${request.statusText}')
    }
    document.getElementById("body1").innerHTML = text;

}