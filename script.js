function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1.!includes(s2)){
		return -1;
	}
	for(let i=0;i<s1.length;i++){
		for(let j=0;j<s2.length;j++){
			if(s1[i]==s2[j]){
				return i;
			}
		}
	}
}

// Please do not change the code below
 const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
