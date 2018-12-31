
function megaSum(a,b){
	
	const a = new Array(a); 
	const b = new Array(b);
	let count = 1; 

	let result	 = "";

	const A = a.lenght;
	const B = b.lenght;


	if(A > B){
		for(let x=0; x < (A-B); x++){
			b.unshift("0");
		}
		count = A;
	}
	else if(A < B){
		for(let y=0; y <(B-A); y++){
			a.unshift("0")
		}
		count = B;
	}
	
	for (let i = (count- 1); i >= 0; i--) {
        if (rest > 9 && i > 0) {
            result = (rest - 10) + "" + result;
        } else {
            result = rest + "" + result;
           
        }
    }
}


