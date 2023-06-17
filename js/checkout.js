displayCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'))
    let item = document.getElementById('checkoutOrder')
    let totalArea = document.getElementById('totalOut')

    let checkTotal= 0

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let size = data[i].subSize;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let drink = data[i].subDrink
        let price = data[i].subPrice; 

        checkTotal += price

        item.innerHTML +=  `
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
            </div>`


        totalArea.innerHTML = "R" + checkTotal + ".00"
    }

}

promo = () => {
    let promo = document.getElementById('promo');
    let promp = 9000
    for(let i = 0; i < promo.length; i++){
    
        if(9000){
            alert("Amout has been deducted 25% ")

        } else {
            alert(" Code does not match please try again")
        }

    }
}
promo = () => {
  
    let promo = document.getElementById("promo")

    if(promo >= 9000){

       

      alert("Amout has been deducted 25%");
    } else {
        alert("Amout has been deducted 25%")
    }
    
 
    console.log(promo)   



}


resetReturn = () => {
    localStorage.removeItem('order')
    window.localStorage.href = '../index.html'
}