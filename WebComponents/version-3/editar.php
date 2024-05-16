<?php
require('include/config.php');
header('Content-Type:text/html;charset=UTF-8');

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$username = $data['username'];
$saldo = $data['saldo'];

try 
{
    $stmt = $db->prepare("UPDATE cuenta SET username = ?, saldo = ? WHERE id = ?");
    $stmt->execute([$username, $saldo, $id]);
    echo json_encode(["success" => true, "message" => "Cuenta actualizada exitosamente"]);
} 

catch (PDOException $e) 
{
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
