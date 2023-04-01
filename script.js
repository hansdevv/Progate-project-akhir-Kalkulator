const calculatorScreen = document.querySelector('.calculator-screen');
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const updateScreen = number=>{
	calculatorScreen.value = number;
}

const inputNumber = number=>{
	if(currentNumber === '0'){
		currentNumber = number;
	}else{
		currentNumber += number;
	}
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(number=>{
	number.addEventListener('click', (event)=>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
})

const operators = document.querySelectorAll('.operator');
const equalsign = document.querySelector('.equal-sign');

const inputOperator = operator=>{
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
}

// Menambahkan event saat tombol persen dipencet
const btnPrecentage = document.querySelector('.precentage');
btnPrecentage.addEventListener('click', ()=>{
	currentNumber /= 100;
});

const calculate = () =>{
	let result = '';
	switch(calculationOperator){
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			return;
	}
	currentNumber = result;
	calculationOperator = '';
}

operators.forEach(operator=>{
	operator.addEventListener('click', (event)=>{
    inputOperator(event.target.value);
  })
})

equalsign.addEventListener('click', ()=>{
	calculate();
	updateScreen(currentNumber);
})

// Membuat tombol AC berjalan
const clearAll = ()=>{
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', ()=>{
	clearAll();
	updateScreen(currentNumber);
})

// Membuat aplikasi dapat mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal');
inputDecimal = (dot)=>{
	currentNumber += dot;
}

decimal.addEventListener('click', event=>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})
