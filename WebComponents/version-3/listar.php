<?php
require('include/config.php');
header('Content-Type:text/html;charset=UTF-8');

try 
{
    $stmt = $db->prepare("SELECT * FROM cuenta");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} 

catch (PDOException $e) 
{
    echo "Error: " . $e->getMessage();
}
?>
