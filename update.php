<?php
	//first connect to the database 
    require_once('C:\xampp\htdocs\322\As1\connection.php');
    $queryADD = "SELECT * FROM `newtopics`";
    $result = $con->query($queryADD);

// If there are topics, display them
if ($result !== false) {
    while ($row = $result->fetch()) {
        // Check if the topic is active
        $checked = $row['active'] == 1 ? 'checked' : '';

        // Display each topic as a radio button
        echo '<input type="radio" name="topic" value="' . $row['topic'] . '" ' . $checked . '> ' . $row['topic'] . '<br>';
    }
} else {
    echo 'No topics found.';
}