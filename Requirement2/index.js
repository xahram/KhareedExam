let items = [{ id: "Select Item", price: "" }, { id: "customDuty", price: 20 }, { id: "shippingCharge", price: 10 }, { id: "em", price: 5 }, { id: "HAHA", price: 40 },{ id: "zero", price: 240 }]


let selectArray = []
const sum = []
let last = null
let secondLast = null


function calculate() {
    if (sum.length === 2) {
        const val1 = sum.pop()
        const val2 = sum.pop()
        last = val1
        return val1 + val2
    }
    return sum[sum.length - 1]
    // if (!last) {
    //     return sum[sum.length - 1]
    // }
    // else {
    //     const val = last + sum[sum.length - 1];
    //     // secondLast = sum[sum.length - 1]
    //     return val
    // }

}



function onChangeHandler(e) {
    sum.push(parseInt(e.target.value !== '' ? e.target.value : 0))
    document.getElementById("result").innerText = calculate(e.target.value !== '' ? parseInt(e.target.value) : 0)

}

const add = document.getElementById("add")
add.addEventListener("click", addClickHandler)

// Add New Div
function addClickHandler() {
    if (selectArray.length < 2) {
        const price = document.createElement("select")
        const selectMenu = document.createElement("select")

        price.addEventListener('change', onChangeHandler)
        const newItem = { id: selectArray.length, selectMenu: selectMenu, price: price }
        selectArray.push(newItem)


        items.forEach((item) => {
            const id = document.createElement("option")
            id.setAttribute('value', item.id)
            id.innerText = item.id

            newItem.selectMenu.appendChild(id)

            const price = document.createElement("option")
            price.setAttribute('value', item.price)
            price.innerText = item.price

            newItem.price.appendChild(price)

            // select.price.appendChild(price)

        })



        console.log(selectArray)
        const div = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete"


        deleteButton.addEventListener("click", (e) => {
            e.target.parentNode.remove()
            selectArray = selectArray.filter((item) => {
                return item.id !== newItem.id
            })
            console.log(selectArray)
        })
        // deleteButton.onclick = function (this) {

        // }
        div.appendChild(newItem.selectMenu);
        div.appendChild(newItem.price);
        div.appendChild(deleteButton);
        main.appendChild(div);
    }

}


function createSelect() {
    selectArray.forEach((select) => {

        // Create HTML Options Based on Items Array and then append 
        // it to each individual item {} containing Select Element 
        // for TYPE And PRICE
        items.forEach((item) => {
            const id = document.createElement("option")
            id.setAttribute('value', item.id)
            id.innerText = item.id

            select.selectMenu.appendChild(id)

            const price = document.createElement("option")
            price.setAttribute('value', item.price)
            price.innerText = item.price

            select.price.appendChild(price)

        })

    })
}



//On Page Load
function onLoadHandler() {

    // Create Html Select Elements Array

    for (i = 0; i < 2; i++) {
        const price = document.createElement("select")
        const selectMenu = document.createElement("select")

        price.addEventListener('change', onChangeHandler)
        selectArray.push({ id: selectArray.length, selectMenu: selectMenu, price: price })
    }



    createSelect()

    const main = document.getElementById("main")
    for (i = 0; i < selectArray.length; i++) {
        const id = selectArray[i].id
        const div = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete"


        deleteButton.addEventListener("click", (e) => {
            e.target.parentNode.remove()
            selectArray = selectArray.filter((item) => {
                return item.id !== id
            })
            console.log(selectArray)
        })
        // deleteButton.onclick = function (this) {

        // }
        div.appendChild(selectArray[i].selectMenu);
        div.appendChild(selectArray[i].price);
        div.appendChild(deleteButton);
        main.appendChild(div);
    }


}
