<?php
   $con = mysqli_connect('127.0.0.1','root@localhost','');
   if(!$con)
   {
   echo 'Not connected To Server';
  }
  if(!mysqil_select_db($con,'zzz'))
  {
    echo 'Database not selected';
  }
  $Name = $_POST['name'];
  $Email = $_POST['email'];
  $sql ="INSERT INTO person (name,email)values('$name','$email')";
  if(!mysqli_query($con,$sql))
  {
    echo 'Not Inserted';
    }
    else
    {
    echo 'Inserted';
    }
    header("refresh:1;url=from.html");
?>
