
function validateDropbox(){
   
    var dropbox = document.getElementsByName("eventType");
    var selected = dropbox.options[dropbox.selectedIndex].value;

    var selected = dropbox.options[dropbox.selectedIndex].text;
    if(selected==0)
    {
        alert("You need to choose an Event");
    }
}

function validateTextbox() {
if (document.getElementById("eventTitle").value == "") {
    alert("Event title is required.");
} 
else if (document.getElementById("dateFrom").value == "") {
    alert("The date of event is required.");
}
else if (document.getElementById("dateTo").value == "") {
    alert("The end date of event is required.");
}
else if (document.getElementById("postDate").value == "") {
    alert("The post date is required.");
}
}

function validateCheckbox(){
var checkboxes = document.getElementsByName("check");
var x = 0;

for(var i = 0; i < checkboxes.length; i++)  
{  
    if(checkboxes[i].checked)  
        x++;  
}  
if(x<1)  
{  
    alert("Check at least one of the boxes.");  
}  
}


function validate(){

var a=document.getElementById("you").value;
var b=document.getElementById("eventType").value;
var c=document.getElementById("eventTitle").value;
var d=document.getElementById("dateFrom").value;
var e=document.getElementById("dateTo").value;
var f=document.getElementById("postDate").value; 
if(a|b|c|d|e|f !=""){
alert("Successful Validation");
    alert("Event Type: " + b + " \n" + "Event Title is: " + c + " \n" + "Event dates: " + d + " To " + e + " \n" + "Posting Dates: " + f)
    document.getElementById("check").value="";
    document.getElementById("eventType").value="";
    document.getElementById("eventTitle").value="";
    document.getElementById("dateFrom").value="";
    document.getElementById("dateTo").value="";
    document.getElementById("postDate").value="";
}
else{
validateCheckbox();
validateTextbox();
validateDropbox();
} 

function reset(){

alert("Changes have been made");
document.getElementById("check").value="";
document.getElementById("eventType").value="";
document.getElementById("eventTitle").value="";
document.getElementById("dateFrom").value="";
document.getElementById("dateTo").value="";
document.getElementById("postDate").value="";
}
}