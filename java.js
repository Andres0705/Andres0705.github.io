function validacion(){
    const name=document.getElementById("nombre").value;
    const razon=document.getElementById("razon").value;
    const email=document.getElementById("email").value;

    if(name==""|| razon==""||email==""){
        alert("por favor rellenar los campos vacios" );
 
    }else{
         alert("formulario correcto");

    }



}