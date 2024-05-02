<?php
require('include/config.php');
header('Content-Type: application/json; charset=UTF-8');

try 
{
    $query = "SELECT * FROM provincia";
    $statement = $db->query($query);
    $provincias = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($provincias);
} 

catch (PDOException $e) 
{
    echo json_encode(array('error' => $e->getMessage()));
}
?>

