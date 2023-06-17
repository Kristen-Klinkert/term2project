displaySub = () => {

    let monthSubs = document.getElementById('subOut')

    for(let i = 0; i < subData.length; i++){
        
        let name = subData[i].subName;
        let size = subData[i].subSize;
        let bread = subData[i].subBread;
        let toppings = subData[i].subToppings;
        let sauce = subData[i].subSauce;
        let drink = subData[i].subDrink
        let price = subData[i].subPrice; 

        monthSubs.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><strong>Bread type:</strong> ${bread}</p>
                <p class="card-text"><strong>Size:</strong> ${size}</p>
                <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                <p class="card-text"><strong>Drink:</strong> ${drink}</p>
                <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
            </div>
        </div `


    }

}



let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let size = document.getElementById("size").value;

    if(size === "Small"){
        subTotal = subTotal + 20;
    } else if(size === "Medium"){
        subTotal = subTotal + 40;
    } else if(size === "Large"){
        subTotal = subTotal + 60;
    }

          // Get Radio Options
    let breadOption = document.getElementsByName("breadRadio");
    let breadValue; 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            breadValue = breadOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    let drinkOption = document.getElementsByName("drinkRadio");
    let drinkValue; 
    for(let i = 0; i < drinkOption.length; i++){
        if(drinkOption[i].checked){
            drinkValue = drinkOption[i].value
            subTotal = subTotal + +drinkOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    let sauceArray = [];
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            sauceArray.push(sauceOptions[i].value);
            subTotal = subTotal + +sauceOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subSize: size,
        subBread: breadValue,
        subToppings: topArray,
        subSauce: sauceArray,
        subDrink: drinkValue,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    realTimePrice = 0; 

    let size = document.getElementById("size").value;
    if(size === "Small"){
        realTimePrice = realTimePrice + 20;
    } else if(size === "Medium"){
        realTimePrice = realTimePrice + 40;
    } else if(size === "Large"){
        realTimePrice = realTimePrice + 60;
    }

    let breadOption = document.getElementsByName("breadRadio"); 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            realTimePrice = realTimePrice + +breadOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

    let drinkOption = document.getElementsByName("drinkRadio");
    for(let i = 0; i < drinkOption.length; i++){
        if(drinkOption[i].checked){
            realTimePrice = realTimePrice + +drinkOption[i].dataset.cost
        }
    }
    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {

    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML = "";

    let overallTotal = 0; 

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let size = subOrder[i].subSize;
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let sauce = subOrder[i].subSauce;
        let drink = subOrder[i].subDrink
        let price = subOrder[i].subPrice; 


        overallTotal += price;

        area.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Bread type:</strong> ${bread}</p>
                    <p class="card-text"><strong>Size:</strong> ${size}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                    <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                    <p class="card-text"><strong>Drink:</strong> ${drink}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div `

        total.innerHTML = "R" + overallTotal + ".00"

    }
}


checkOut = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('order', data)
    window.location.href = '/pages/checkout.html'
}


