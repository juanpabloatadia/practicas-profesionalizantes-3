<?php
require('include/config.php');
header('Content-Type:text/html;charset=UTF-8');

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$saldo = $data['saldo'];

try 
{
    $stmt = $db->prepare("INSERT INTO cuenta (username, saldo) VALUES (?, ?)");
    $stmt->execute([$username, $saldo]);
    echo json_encode(["success" => true, "message" => "Cuenta creada exitosamente"]);
} 

catch (PDOException $e) 
{
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
