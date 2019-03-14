$(document).ready(function(){
    for(var i=1950;i<=2019;i++){
        console.log(i);
        $("#ano").append('<option value="'+i+'">'+i+'</option>');
    }
    $("button").click(function(){
        if($("#marcas").val()!="" && $("#modelos").val() && $("#email").val() && $("#ano").val()){
            alert("Llene todos los campos porfavor.");
        }else{
            $.post("http://localhost:8080/pruebaJavaBack/webservice/",
            {
            marca: $("#marcas").val(),
            modelo: $("#modelos").val(),
            ano:$("#ano").val(),
            email:$("#email").val()
            },
            function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            });
        }
    });
    
    $.ajax({
		data:{"consultar":"marcas"}
		,method:"GET"
		,url:"http://localhost/ProyectoServicesPHP/consultarmarcas.php"  
    }).done(function( msg ) {
    	alert( "Data Saved: " + msg );
  	 });
    /*$.get("http://localhost/ProyectoServicesPHP/consultarmarcas.php", function(data, status){
    	console.log(data);
        $.each(JSON.parse(data),function(item,data){
            $("#marcas").append('<option value="'+item+'">'+data+'</option>');
        });
        //alert("Data: " + data + "\nStatus: " + status);
      });/*
      $.get("http://localhost:8080/pruebaJavaBack/consultarModelos/", function(data, status){
        $.each(JSON.parse(data),function(item,data){
            $("#modelos").appendTo('<option value="'+item+'">'+data+'</option>');
        });
        //alert("Data: " + data + "\nStatus: " + status);
      });*/
  });