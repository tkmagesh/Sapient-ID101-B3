function getEmployee(id, name, basic, tax){
	var emp = {
		id : id,
		name : name,
		basic : basic,
		tax : tax,
		calculateSalary : function(){
			return emp.basic * ((100 - emp.tax)/100);
		}
	};
	return emp;
}