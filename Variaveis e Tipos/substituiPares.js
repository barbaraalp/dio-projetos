function substituiPares(array){
    if(!array.length) return console.log(-1);

	for (let i = 0; i < array.length; i++) {
        if (array[i]!==0 && array[i]%2===0){
            array[i]=0;
        }
    }
    console.log(array)
}


substituiPares( [1, 3, 4, 6, 80, 33, 23, 90]);
