function firstNonRepeatedChar(str) {
	 for (let i = 0; i < str.length; i++) {
	 	let currentCharacter = str[i]
		 let count = 0;
		 for(let j = 0; j < str.length; j++){
			 if (currentCharacter == str[j]) {
			 	count ++;
			 } 
			 if(count == 1){
				 return currentCharacter;
			 }
		 }
	 }
	return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
