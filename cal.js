/*class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement= previousOperandTextElement
        this.currentOperandTextElement= currentOperandTextElement
        this.clear()
    }

clear() {
     this.currentOperand= ''
     this.previousOperand= ''
     this.operation= undefined
}
delet()
{

}
appendNumber(number) {
     this.currentOperand=number
   }
selectoperation(operation)
{

}
Compute()
{

}
updateDisplay() {
   this.currentOperandTextElement.innerText=this.currentOperand
}
}
const numberButtons = document.querySelector('[data-number]')
const operationButtons=document.querySelector('[data-operation]')
const allclearbutton=document.querySelector('[data-all-clear]')
const deletebutton=document.querySelector('[data-delete]')
const equalsbutton=document.querySelector('[data-equals]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => { 
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
*/

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
     this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
       this.currentOperand=this.currentOperand.toString()+number.toString()
    } //Every time the user click the number it adds the number in the screen
    selectOperation(operation) {
     if(this.currentOperand === '')return
     if(this.previousOperand !== ''){
         this.compute
     }
     this.operation =operation
     this.previousOperand=this.currentOperand
     this.currentOperand= ''
    }  //In this function user can select the  particular operation 
    compute() {
     let computation
     const prev=parseFloat(this.previousOperand)
     const current=parseFloat(this.currentOperand)
     if(isNaN(prev) || isNaN(current)) return
     switch(this.operation) {
         case '+' :
             computation=prev+current
             break;
        case '-' :
             computation=prev-current
             break;
        case '*' :
             computation=prev*current
             break;
        case '÷' :
             computation=prev/current
             break;
                        
        default:
            return
     }
     this.currentOperand = computation
     this.operation=undefined
     this.previousOperand= ''
    } //This function will collect the inputvalues and perform the operations.
    updateDisplay() {
      this.currentOperandTextElement.innerText=this.currentOperand
    this.previousOperandTextElement.innerText=this.previousOperand
    } //This function is used to update the values


}  
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const ClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.selectOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
ClearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',button =>{
    calculator.delete()
    calculator.updateDisplay()
})