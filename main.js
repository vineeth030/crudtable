$(document).ready(function(){
    
    $(".deleteBtn").on('click',function(){
        id = $(this).attr('data-id');
        deleteData(id);
    });

    $(".editBtn").on('click',function(){
        id = $(this).attr('data-id');
        className = '.input'+id;
        labelName = '.label'+id;

        console.log(className);

        $(className).show();
        $(".updateBtns").show();
        $(labelName).hide();
        $(this).hide();

    });

    $(".updateBtn").on("click",function(){
        id = $(this).attr('data-id');
        className = '.input'+id;
        labelName = '.label'+id;

        name = $('.name_input'+className).val();
        price = $('.price_input'+className).val();

        data = new Array();
        data['id'] = id;
        data['name'] = name;
        data['price'] = price;

        editData(data);
    });

    $("#save").on('click',function(){
        
        name = $("#name").val();
        price = $("#price").val();

        data = new Array();
        data['name'] = name;
        data['price'] = price;

        addData(data);
    });

});

function deleteData(id){
    $.ajax({
       url : 'action.php',
        data:{'action':'deleteData','id':id},
        type:'post',
        success:function (data) {
            console.log(data);
            window.location.reload();
        }
    });
}

function addData(data){

    $.ajax({
        url : 'action.php',
        data:{'action':'addData','price':data.price,'name':data.name},
        type:'post',
        success:function (data) {
            console.log(data);
            window.location.reload();
        }
    });
}

function editData(data){

    $.ajax({
        url : 'action.php',
        data:{'action':'editData','price':data.price,'name':data.name,'id':data.id},
        type:'post',
        success:function (data) {
            console.log(data);
            window.location.reload();
        }
    });
}
