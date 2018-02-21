$(window).bind("load", function() {
	var i = 1;
	var iv = 1;
	while(i < 4){
		setTimeout(function(){
			$(".sec-"+iv).removeClass('sec-'+iv);
			console.log(iv);
			iv++
		},0 + (i * 700))
		i++;
	}
	
});