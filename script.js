var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var operations = ['=', '√', 'x2', 'x3', '%']
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var screen = document.querySelector('#screen');
		var inputVal = screen.innerHTML;
		var btnVal = this.innerText;
		
		if(btnVal == 'C') {
			screen.innerHTML = '';
			decimalAdded = false
		}
		else if(operations.indexOf(btnVal) > -1) {
			var equation = inputVal;
			if(equation) {
			  var lastChar = equation[equation.length - 1];
			  
		  equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
				
			equation = eval(equation);
			
			if (btnVal == '√')
			  equation = Math.sqrt(equation);
			else if (btnVal == 'x2')
			  equation = Math.pow(equation, 2);
			else if (btnVal == 'x3')
			  equation = Math.pow(equation, 3);
			else if (btnVal == '%')
			  equation = equation / 100;
			 screen.innerHTML = equation;
			}
			decimalAdded = false;
		}
		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1)
				screen.innerHTML += btnVal;
			else if(inputVal == '' && btnVal == '-') 
				screen.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				screen.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		else if(btnVal == '.') {
			if(!decimalAdded) {
				screen.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		else {
			screen.innerHTML += btnVal;
		}
		e.preventDefault();
	} 
}
