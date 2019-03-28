function suma(a,b){
	return a + b;
}

function resta(a,b){
	return a - b;
}

function multiplicar(a,b){
	return a * b;
}

function dividir(a,b){
	return a / b;
}

function potencia(a,b){
	let pot = 1;
	let i = 0;
	for(i=0; i < b; i++){
		pot = pot * a;
	}
	return pot;
}

function factoriza(a){
	let fac = 1;
	let i = 0;
	for(i=1; i<=a; i++){
		fac = fac * i;
	}
	return fac;
}
