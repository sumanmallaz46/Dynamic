//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data);
    document.querySelector("#demoo").innerHTML = data[0].id;
    document.querySelector("#demooo").innerHTML = data[0].category;
});

document.querySelector("#demo").innerHTML = "Hello World!";

