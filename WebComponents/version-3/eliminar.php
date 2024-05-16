<?php
require('include/config.php');
header('Content-Type:text/html;charset=UTF-8');

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];

try 
{
    $stmt = $db->prepare("DELETE FROM cuenta WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["success" => true, "message" => "Cuenta eliminada exitosamente"]);
} 

catch (PDOException $e) 
{
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
