<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
     <title>Home Rayhan</title>
  </head>
<body>


</body>
<?php
//if(isset($_POST['submit'])){
$mysqlhost="localhost";
$mysqlusername="root";
$mysqlpassword="";
$mysqldb="example";
$name =  $_POST['name'];
$class =  $_POST['class'];
$dob =  $_POST['dob'];
$address =  $_POST['address'];
//$function mysqli_connect();
$conn= mysql_connect('$mysqlhost','$mysqlusername','$mysqlpassword',);
$db = mysql_select_db('$mysqldb')
//$sql = mysqli_query($dbconnect,"insert into std_admission(s_no,name,class,dob,address) values('','Nepali','5','2000/1/1','Katmundu')");
//$sql = "insert into std_admission(s_no,name,class,dob,address) values('','Nepali','5','2000/1/1','Katmundu')";

//$run = mysqli_query($dbconnect,$sql);
//if ($conn){
     //echo  "Data inserted Successfully ";
  //  }
//else{
//  echo  "Faild Not Inserted";
//   }

//}
?>
