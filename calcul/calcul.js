class Calculator {
    constructor(preElement, curElement) {
        this.preElement = preElement
        this.curElement = curElement
        this.reset()
    }

    reset() {
        this.curOperand = ''
        this.preOperand = ''
        this.operation = undefined
    }

    sendNum(number) {
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()
    }

    checkOperand(operation) {
        if (this.curOperand === '') return
        if (this.preOperand !== '') {
            this.allcalcul()
        }
        this.operation = operation
        this.preOperand = this.curOperand
        this.curOperand = ''
    }

    allcalcul() {
        let result
        const pre = parseFloat(this.preOperand)
        const cur = parseFloat(this.curOperand)
        if (isNaN(pre) || isNaN(cur)) return
        switch (this.operation) {
            case '+':
                result = pre + cur
                break
            case '-':
                result = pre - cur
                break
            case '*':
                result = pre * cur
                break
            case '/':
                result = pre / cur
                break
            default:
                return
        }
        this.curOperand = result
        this.operation = undefined
        this.preOperand = ''
    }

    rePlay() {
        this.curElement.textContent = this.curOperand
        if (this.operation != null) {
            this.preElement.textContent =
                `${this.preOperand} ${this.operation}`
        } else {
            this.preElement.textContent = ''
        }
    }

    // // 숫자 하나만 지우기
    // delete() {
    //     this.currentOperand = this.currentOperand.toString().slice(0, -1)
    // }

    // // 숫자 쉽표 표시
    // getDisplayNumber(number) {
    //     const stringNumber = number.toString()
    //     const integerDigits = parseFloat(stringNumber.split('.')[0])
    //     const decimalDigits = stringNumber.split('.')[1]
    //     let integerDisplay
    //     if (isNaN(integerDigits)) {
    //         integerDisplay = ''
    //     } else {
    //         integerDisplay = integerDigits.toLocaleString('en', {
    //             maximumFractionDigits: 0
    //         })
    //     }
    //     if (decimalDigits != null) {
    //         return `${integerDisplay}.${decimalDigits}`
    //     } else {
    //         return integerDisplay
    //     }
    // }
}

const numBtn = document.querySelectorAll(".js-numbtn");
const calculBtn = document.querySelectorAll(".js-calculbtn");
const resetBtn = document.querySelector(".js-resetbtn");
const equalBtn = document.querySelector(".js-equalbtn");
const preResult = document.querySelector(".js-preresult")
const curResult = document.querySelector(".js-curresult")
// const deleteButton = document.querySelector("") // 숫자 하나씩 지우는 버튼
// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
// })
const calculator = new Calculator(preResult, curResult)

function resetEvent() {
    calculator.reset()
    calculator.rePlay()
}

function equalEvent() {
    calculator.allcalcul()
    calculator.rePlay()
}

function numsEvent(event) {
    const num = event.target.textContent
    calculator.sendNum(num)
    calculator.rePlay()
}

function calculsEvent(event) {
    const calcul = event.target.textContent
    calculator.checkOperand(calcul)
    calculator.rePlay()
}

function init() {
    resetBtn.addEventListener("click", resetEvent);
    equalBtn.addEventListener("click", equalEvent);
    numBtn.forEach(function (ele) {
        ele.addEventListener("click", numsEvent)
    })
    calculBtn.forEach(function (ele) {
        ele.addEventListener("click", calculsEvent)
    })
}

init();