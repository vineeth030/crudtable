$(document).ready(function(){
    /*console.log("This is Hello World by JQuery");*/

    loadData();

});

function loadData() {
    
    $.ajax({
        url:'controller/action.php',
        method:'post',
        data:{
            'action':'getProducts'
        },
        success:function (data) {

            products = JSON.parse(data);

            products.forEach(function (product) {

                trHtml = '<tr><td>'+product.id+'</td><td>'+product.name+'</td><td>'+product.price+'</td>';

                trHtml += "<td><input type='button' class='btn btn-danger' value='Delete'></td>";

                trHtml += "<td><input type='button' class='btn btn-primary' value='Edit'></td></tr>";

                $('.table > tbody:last-child').append(trHtml);
                
            })


        },
        failed:function (data) {
            console.log(data);
        }
        
    });
    
}