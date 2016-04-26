<?php
include_once 'db.php';

if(!isset($_POST['action'])){
    echo "error!!"; exit();
}

switch ($_POST['action']){
    case 'deleteData' :{
        deleteData($conn,$_POST['id']);
        break;
    }
    case 'addData' :{
        addData($conn,$_POST['name'],$_POST['price']);
        break;
    }
    case 'editData' :{
        editData($conn,$_POST['name'],$_POST['price'],$_POST['id']);
        break;
    }
        
    default  :{
        getProducts($conn);
        break;
    }
        
}

function deleteData($conn,$id){

    $sql = "UPDATE products SET status = 1 WHERE id=$id";

    $res = $conn->query($sql);
    
    echo json_encode(array('status'=>1));
    
}

function addData($conn,$name,$price){


    $sql = "INSERT INTO products (name,price) VALUES ('$name','$price')";

    $res = $conn->query($sql);

    echo json_encode(array('status'=>'success'));
    
}

function editData($conn,$name,$price,$id){


    $sql = "UPDATE products SET name='$name',price=$price WHERE id=$id";

    $res = $conn->query($sql);

    echo json_encode(array('status'=>$sql));

}

/*
 * 
 * $products = array();

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

 */




