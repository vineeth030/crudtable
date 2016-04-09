<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "crudtable";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(!isset($_POST['action'])){
    echo "error!!"; exit();
}

switch ($_POST['action']){
    case 'getProducts' :{
        getProducts($conn);
        break;
    }
        
    default  :{
        getProducts($conn);
        break;
    }
        
}

function getProducts($conn){

    $sql = "SELECT * FROM products";

    $res = $conn->query($sql);

    $products = array();

    if($res->num_rows > 0){

        while ($row = $res->fetch_assoc()){
            $product = array();
            $product['id'] = $row['id'];
            $product['name'] = $row['name'];
            $product['price'] = $row['price'];
            $product['status'] = $row['status'];

            array_push($products,$product);
        }

    }

    echo json_encode($products);
    
}




