<?php

// php code to Insert data into mysql database from input text
if(isset($_POST['insert']))
{
    $hostname = "127.0.0.1";
    $username = "root";
    $password = "";
    $databaseName = "zzz";

    // get values form input text and number


    $name = $_POST['name'];
    $address = $_POST['address'];

    // connect to mysql database using mysqli

    $connect = mysqli_connect($hostname, $username, $password, $databaseName);

    // mysql query to insert data

    $query = "INSERT INTO 'person'('name', 'address') VALUES ('$name','$address')";

    $result = mysqli_query($connect,$query);

    // check if mysql query successful

    if($result)
    {
        echo 'Data Inserted';
    }

    else{
        echo 'Data Not Inserted';
    }

    mysqli_free_result($result);
    mysqli_close($connect);
}

?>
