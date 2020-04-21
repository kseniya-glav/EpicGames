<?php 
session_start(); 

include_once('settings.php'); 

$login = $_POST['login']; 
$password = $_POST['password']; 

$sql_login = sprintf("SELECT * FROM users WHERE login = '$login'"); 
$result = mysqli_query($connection, $sql_login); 
$row = mysqli_fetch_assoc($result); 
 
if (md5($password . $salt . $login . $salt) == $row['password']) {

$_SESSION['username'] = $row['username']; 
header("Location: ../../pages/registration.php"); 
exit(); 
}?> 
