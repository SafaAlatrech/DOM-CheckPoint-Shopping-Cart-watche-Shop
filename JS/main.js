// Heart 
let hearts = document.getElementsByClassName("fa-heart")
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        heart.classList.toggle("is_activate")
    })
}
//delete item
let delete_items = document.getElementsByClassName("delete-item")
for (let delete_item of delete_items) {
    delete_item.addEventListener("click", function () {
        delete_item.parentNode.parentNode.remove()
        somme()
    }) 
}
//add quantity
let plus_quants = document.getElementsByClassName("plus-item")
for (let plus_quant of plus_quants) {
    plus_quant.addEventListener("click", function () {
        plus_quant.previousElementSibling.innerHTML++
        somme()
    })
}
//Remove quantity
let minus_quants = document.getElementsByClassName("minus-item")
for (let minus_quant of minus_quants) {
    minus_quant.addEventListener("click", function () {
        if (minus_quant.nextElementSibling.innerHTML > 0
        ) { minus_quant.nextElementSibling.innerHTML-- }
        somme()
    })
}
//Total price
function somme() {
    let price = document.getElementsByClassName("price")
    let qte = document.getElementsByClassName("qte")
    let sum = 0
    for (let i = 0; i < price.length; i++) {
        sum= sum + price[i].innerHTML * qte[i].innerHTML
    }
    console.log(sum)
    return (document.getElementById("total").innerHTML= sum );
}