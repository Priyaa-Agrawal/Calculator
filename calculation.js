	var x ;
	var y ;
	var r;
	function check(){
		x= document.getElementById("demo1").value;
		y= document.getElementById("demo2").value;
		return ((x=='' || y=='')?true:false);
	}
	function cleanbox(){
		document.getElementById('demo1').value = '';  
		document.getElementById('demo2').value = '';
	}
	function from(){
		if(r==undefined)
			alert("Ateast Perform An Operation !");
		else{
			document.getElementById('demo1').value = r;
			document.getElementById('demo2').value = '';
		}
	}
	function to(){
		if(r==undefined)
			alert("Ateast Perform An Operation !");
		else{
			document.getElementById('demo1').value = ''; 
			document.getElementById('demo2').value = r;
		}
	}
	function Add(){  
 		var sum;
		if (check()){
			alert("Please enter the numbers: ");
		}
		else{
			x=Number(x);
			y=Number(y);
		sum = x + y;
		r = sum;	
		document.getElementById("add").innerHTML = "Sum of given Numbers:-   " + sum;		
		}			     
	}
	function Sub(){		  
		var sub;
		if (check()){
			alert("Please enter the numbers: ");
		}
		else{
		sub = x - y;
		r = sub;		
		document.getElementById("add").innerHTML = "Substraction of given Numbers:-   " + sub;
		}			
}
	function Mul(){   
		var mul;
		if (check()){
			alert("Please enter the numbers: ");
		}
		else{
		mul = x * y;
		r = mul;	
		document.getElementById("add").innerHTML = "Product of given Numbers:-   " + mul;
	}
}
	function Div(){    
		var div;
		if (check()){
			alert("Please enter the numbers: ");
		}
		else{
		div = x / y;
		r = div;		
		document.getElementById("add").innerHTML = "Division of given Numbers:-   " + div;
	}	
}