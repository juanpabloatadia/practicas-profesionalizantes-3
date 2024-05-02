<?php
require('include/config.php');
header('Content-Type: application/json; charset=UTF-8');

try 
{
    $query = "SELECT * FROM municipio";
    $statement = $db->query($query);
    $municipios = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($municipios);
} 

catch (PDOException $e) 
{
    echo json_encode(array('error' => $e->getMessage()));
}
?>
