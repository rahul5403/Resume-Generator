function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control","mt-2","weField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")
    let weob = document.getElementById("iwe");
    let weAddButtonOb = document.getElementById("weAddButton");
    weob.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control","mt-2","aqField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")
    let weo = document.getElementById("iaq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    weo.insertBefore(newNode, aqAddButtonOb);
}

// Generating CV
function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = nameField

    document.getElementById("nameT2").innerHTML = nameField

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value

    let wes = document.getElementsByClassName("weField")
    let str = "";
    for(let e of wes){
        str = str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
 
    let aqs = document.getElementsByClassName("aqField")
    let strr = "";
    for(let e of aqs){
        strr = strr+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = strr;

    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    }

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'


}
// Print cv
function printCV(){
    window.print();
}