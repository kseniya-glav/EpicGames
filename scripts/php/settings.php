<?php
  define('HOST', 'sql208.byethost7.com'); 
  define('USER', 'b7_22327313'); 
  define('PASSWORD', '55652mama'); 
  define('DB', 'b7_22327313_comments'); 

  $connection = mysqli_connect(HOST, USER, PASSWORD, DB); 
  $salt = "My favorite site"; 

  if ( ! $connection) {
    exit(mysql_error()); 
  }
