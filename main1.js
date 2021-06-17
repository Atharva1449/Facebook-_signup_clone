function validcheck(){
var check1=document.getElementById("name1").value;
var check2=document.getElementById("email1").value;
var date1=document.getElementById("date1").value;
var phone1=document.getElementById("phone1").value;
var c1="",c2="",c3="",c4="";
if(check1==null || check1==""){
//alert("name not valid");
c1="name not valid*";


//return false;
}

atLocation = check2.indexOf("@");
   dotLocation = check2.lastIndexOf(".");

   if ( atLocation < 1 || (dotLocation - atLocation) < 2 ) {
   	//alert ( "Email format not valid" );
   	c2="email not valid*";
     // alert(c2);
      //return false;
   }


   if(date1==""|| date1==null){
      c3="date not valid*";
   }

   if(phone1==null || phone1=="" || phone1.length<10 || phone1.length>10 ){
      c4="phone number ot valid*";
   }

   document.getElementById("para").innerHTML=c1+"<br>"+c2+"<br>"+c3+"<br>"+c4;

}
