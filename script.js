console.log("connected")

function validation(){
       var msg = document.getElementById('myMsg').value;
       var age = document.getElementById('dAge').value;
       var err = document.getElementById('error_msg');
       var name = document.getElementById('usrName').value;
       var hasNumber = /\d/;
       if(hasNumber.test(name)){
        err.innerHTML = `Name shouldn't contain Numbers`;
        alert('Correct The UserName');
       }
       else if(age <= 15 || age == ""){
       err.innerHTML = `Enter the Valid Age`;
       alert('Correct The Age');
       }
        else if(msg == `` || msg == `Write Your Message`){
        err.innerHTML = `Enter Valid Message`;
        alert('Correct The Msg');
       }
       else{
        console.log("TEST PASSED");
       }
}