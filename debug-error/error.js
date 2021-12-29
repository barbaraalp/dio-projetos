function validaarrayays(array, num) {
	try {
		if (!array && !num) throw new ReferenceError('Os parâmetros não foram enviados.');

		if (typeof array !== 'object')
			throw new TypeError('Por favor, envie um elemento do tipo array.');

		if (typeof num !== 'number')
			throw new TypeError('Por favor, envie um elemento do tipo Number.');

		if (array.length !== num) throw new RangeError('O tamanho do array não corresponde ao enviado.');

		return array;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('Esse erro é um RangeError.');
            console.log(e.name);
			console.log(e.stack);
            console.log(e.mensage);
		} else if (e instanceof ReferenceError) {
			console.log('Esse erro é um ReferenceError.');
			console.log(e.name);
			console.log(e.stack);
            console.log(e.mensage);/**/
		} else {
			console.log('Outro tipo de erro: '+ e);
			console.log(e.name);
			console.log(e.stack);
           console.log(e.mensage);
		}
	}
}

console.log(validaarrayays());