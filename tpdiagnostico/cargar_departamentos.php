<?php
require('include/config.php');
header('Content-Type: application/json; charset=UTF-8');

try 
{
    $query = "SELECT * FROM departamento";
    $statement = $db->query($query);
    $departamentos = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($departamentos);
} 

catch (PDOException $e) 
{
    echo json_encode(array('error' => $e->getMessage()));
}
?>

