<?php

	//replace username with your username e.g. xyz12  in both places
	// and password with your password
   
   try{
   	
   	$con = new PDO('mysql:host=localhost;dbname=customer2','root','');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
   
