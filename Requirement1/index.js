
const total = document.getElementById("total")
const unit = document.getElementById("unit")
const quantity = document.getElementById("quantity")

let totalPrice = null;
let amount = null;
let unitPrice = null;



const stack = new Stack();

function calculate(type) {
    switch (type) {
        case "unitPrice":
            return stack.pop() * stack.pop()
        case "totalPrice":
            const deno = stack.pop()
            const numer = stack.pop()
            return numer / deno
        case "amount":
            return stack.pop() / stack.pop()

    }
}
const changeHandler = (e, type)=>{

}

unit.addEventListener("change", (e) => {
    unitPrice = parseInt(e.target.value)
    stack.push(unitPrice)
    console.log(stack.arr)

    if (stack.arr.length == 2) {
        const value = calculate(stack.lastEntry)
        // amount = stack.pop() / stack.pop()
        if (stack.lastEntry === "amount") {
            total.value = value
        }
        else {
            quantity.value = value
        }
    }

    stack.lastEntry = "unitPrice"
})

quantity.addEventListener("change", (e) => {
    amount = parseInt(e.target.value)
    stack.push(amount)

    if (stack.arr.length == 2) {
        const value = calculate(stack.lastEntry)
        // totalPrice = stack.pop() * stack.pop()
        if (stack.lastEntry === "unitPrice") {
            total.value = value
        }
        else {
            unit.value = value
        }

        // total.value = totalPrice
    }

    stack.lastEntry = "amount"
})

total.addEventListener("change", (e) => {
    totalPrice = parseInt(e.target.value)
    stack.push(totalPrice)
    console.log("stack ", stack.arr)
    if (stack.arr.length == 2) {
        // value = stack.pop() / stack.pop()
        const value = calculate(stack.lastEntry)
        if (stack.lastEntry === "unitPrice") {
            quantity.value = value
        } else {
            unit.value = value
        }
        // unit.value = unitPrice
        // stack.push(unitPrice)
    }
    stack.lastEntry = "totalPrice"
})



function Stack() {
    this.arr = [];
    this.end = 0;
    this.lastEntry = null;

    this.push = function (val) {
        this.arr[this.end] = val;
        this.end += 1

    }
    this.pop = function () {
        this.end -= 1
        return this.arr.pop()
    }
}