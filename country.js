let input=document.querySelector("input");
input.setAttribute("placeholder","Search for a country...");
let list=document.querySelector("ul");
let row=document.querySelector(".row")


fetch("https://restcountries.com/v3.1/all")
.then((response=>response.json))
.then(data=>{
    for(let i=0;i<data.length;i++){
        row.innerHTML += `<div class="col-3 my-2">
        <a href="detail.html?name=${data[i].name.official}" style="text-decoration: none;color: black;">
        <div class="card" style="width: 18rem; height:100%">
        <img class="card-img-top" height="170px" src="${data[i].flags.png}" alt="Card image cap">
        <div class="card-body">
        <h5 class="d-flex justify-content-left align-items-center" style="height: 90px">${data[i].name.official}</h5>
        <p><b>Population</b>: ${data[i].population}</p>
        <p><b>Region</b>: ${data[i].region}</p>
        <p><b>Capital</b>: ${data[i].capital}</p>
        </div>
        </div>
        </a>
        </div>`
}
})
    


//input search
input.addEventListener("keyup", function () {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        row.innerHTML = "";
        for (let i = 0; i< data.length; i++) {
            if(data[i].name.official.toLowerCase().includes(input.value.toLowerCase())){
                row.innerHTML += `<div class="col-3 my-2">
            <a href="detail.html?name=${data[i].name.official}" style="text-decoration: none;color: black;"></a>
            <div class="card" style="width: 18rem; ">
            <img class="card-img-top" height="170px" src="${data[i].flags.png}" alt="Card image cap">
            <div class="card-body">
            <h5 class="d-flex justify-content-left align-items-center" style="height: 90px">${data[i].name.official}</h5>
            <p><b>Population</b>: ${data[i].population}</p>
            <p><b>Capital</b>: ${data[i].capital}</p>
            <p><b>Region</b>: ${data[i].region}</p>
            </div>
            </div>
            </div>`
            }
        }
    })
})


