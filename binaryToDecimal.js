function binaryToDecimal(val){
	function convert(m){
		m = m.toString();
		return srtToArr(m);
	}

	function srtToArr(str){
		var strArray = [];
		for (var i = 0; i < str.length; i++) {
			strArray.push(str[i]);
			// console.log("this is str[i] " +str[i]);
		}
		return toDecimal(strArray);
	}

	function toDecimal(binary){
		var decimal = [];
		// console.log("this is binary", binary);
		var argLength = binary.length-1;
		// console.log("binary length", binary.length);

		if(binary.length == 1 && binary[0]>1){
			return binary.join('');
		}else{
			for (var i = 0; i < binary.length; i++) {
				if (binary[i] <= 1) {
					decimal.push(binary[i]*Math.pow(2, argLength));
					argLength -= 1;
				}else{
					// console.error("input is not in base 2");
					return "not base 2";
					break;
				}
			}
		}
		// console.log("final decimal array", decimal);

		return decimal.reduce((a, b)=>{
			return (a + b);
			// console.log("the end");
		});	
	}

	return convert(val);
}

binaryToDecimal("1");