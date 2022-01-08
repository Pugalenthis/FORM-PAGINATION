
function foo(){
   
    document.getElementById("first").innerHTML = document.getElementById("first-name").value
    document.getElementById("last").innerHTML=document.getElementById("last-name").value 
    document.getElementById("emai").innerHTML=document.getElementById("email").value 
    document.getElementById("add").innerHTML=document.getElementById("address").value

    document.getElementById("pin").innerHTML=document.getElementById("pincode").value

    let res = document.getElementsByName("gender") 
    
    let arr = []
    for(var i=0;i<res.length;i++){
        if(res[i].checked== true){
            arr.push(res[i].value)
        }
        
    }
    let result = arr[0]
    console.log(result)
    document.getElementById("gend").innerHTML= result
  
    let ele= document.getElementsByName('food')
       
      var array =[]
       for(var i=0;i<ele.length;i++){
           if(ele[i].checked == true){
              array.push(ele[i].value)
           }
       }
       if(array.length<2){
           window.alert("choose atleast two fav foods")
       }
       let foods =array.join(",")
       console.log(foods)
       
     document.getElementById('fud').innerHTML=foods


    document.getElementById("stat").innerHTML=document.getElementById("state").value

     document.getElementById("ctry").innerHTML=document.getElementById("country").value

     document.getElementById("com").innerHTML=document.getElementById("comments").value

     
     
     return 

}
   
    





