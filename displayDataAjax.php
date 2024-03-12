<?php
//first connect to the database   
require_once('C:\xampp\htdocs\322\As1\connection.php');

// Fetch topics from the database by creating the sql query and send it
$query = "select * from `newtopics` WHERE `active` = 1";
$result = $con->query($query);

 //if we get data back display it using a table
 if($result != FALSE) 
 {
     while($row = $result->fetch()) 
     {
         //gets the data from topic and itterates through the loop
         echo $row['topic'] . " " ;
         echo "<br>";
     }
    }

?>
