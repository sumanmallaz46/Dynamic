// fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {

        dataReceived(data);
    })

function dataReceived(products) {
    //loop through products
    products.forEach(showProduct);
}

//executed once for each product
function showProduct(myProduct) {
    //console.log(myProduct)
    //finding the template
    const temp = document.querySelector("#productTemplate").content;
    //clone the template
    const myCopy = temp.cloneNode(true);

    if(!myProduct.discount) {
        myCopy.querySelector(".data_discount").classList.add("hidden")
    }
    if (myProduct.vegetarian) {
        //console.log("veg");
        myCopy.querySelector(".vegetarian").classList.remove("hidden");
    }
    if (myProduct.soldout) {
        const p = document.createElement("p");
        p.textContent = "soldout";
        p.classList.add("soldout");
        myCopy.querySelector("article").appendChild(p);
    }

    //1. find the article
    const article = myCopy.querySelector("article");

    //2. add classes
    if (myProduct.vegetarian) {
        article.classList.add("vegetarian")
    }
    if (myProduct.alcohol) {
        article.classList.add("alcoholic")
    }
    //fill out the template
    myCopy.querySelector(".data_name").textContent = myProduct.name;

    //append
    const parentElem = document.querySelector("section#starter");
    parentElem.appendChild(myCopy)
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const veggiefilter = document.querySelector("#veggiefilter");
veggiefilter.addEventListener("click", veggieFilterClicked);

function veggieFilterClicked() {
    veggiefilter.classList.toggle("active")
    //b select all non veggie
    const articles = document.querySelectorAll("article:not(.vegetarian)");
    //console.log(articles)
    articles.forEach(elem => {
        elem.classList.toggle("hidden")
    })
}

const alcoholfilter = document.querySelector("#alcoholfilter");
alcoholfilter.addEventListener("click", alcoholFilterClicked);

function alcoholFilterClicked() {
    alcoholfilter.classList.toggle("active")
    //b select all non veggie
    const articles = document.querySelectorAll("article.alcoholic");
    //console.log(articles)
    articles.forEach(elem => {
        elem.classList.toggle("hidden")
    })
}
