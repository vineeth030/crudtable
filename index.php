<?php
include_once 'db.php';

$sql = "SELECT * FROM products where status = 0";
$res = $conn->query($sql);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-10">
            <h1>Product Details</h1>
            <table class="table">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Action</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                <?php while ($row = $res->fetch_assoc()){ ?>
                    <tr>
                        <td><?php echo $row["id"] ?></td>
                        <td><?php echo $row["name"] ?></td>
                        <td><?php echo $row["price"] ?></td>
                        <td><button class="deleteBtn">Delete</button></td>
                        <td>
                            <button class="editBtn">edit</button>
                        </td>
                    </tr>
                <?php }?>
                <tr>
                    <td></td>
                    <td><input type="text" id="name"></td>
                    <td><input type="text" id="price"></td>
                    <td><button id="save">Save</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="main.js"></script>
</body>
</html>