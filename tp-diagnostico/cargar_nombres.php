<?php
require('include/config.php');
header('Content-Type: application/json; charset=UTF-8');

try 
{
    $query = "SELECT * FROM nombre";
    $statement = $db->query($query);
    $nombres = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($nombres);
} 

catch (PDOException $e) 
{
    echo json_encode(array('error' => $e->getMessage()));
}
?>
