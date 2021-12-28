function palindromo(string){
    if(!string) return;
    console.log(string.replace(/\s+/g, '').toLowerCase() === string.replace(/\s+/g, '').split('').reverse().join('').toLowerCase());
}

palindromo('Socorram me subi no onibus em Marrocos');