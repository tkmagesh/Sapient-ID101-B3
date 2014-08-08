function getSapientNumbers(numbers){
	return {
		numbers : numbers,
		sum : function(){
			var result = 0;
			for(var i=0; i < this.numbers.length;i++)
				result += this.numbers[i];
			return result;
		},
		average : function(){
			return this.sum() / this.numbers.length;
		},
		min : function(){
			var result = this.numbers[0];
			for(var i=1; i< this.numbers.length; i++)
				if (result > this.numbers[i])
					result = this.numbers[i];
			return result;
		},
		max : function(){
			var result = this.numbers[0];
			for(var i=1; i< this.numbers.length; i++)
				if (result < this.numbers[i])
					result = this.numbers[i];
			return result;
		}
	};
}