$(document).ready(function(){
    
    $(".deleteBtn").on('click',function(){
        par = $(this).parent().parent();
        id = par.children("td:nth-child(1)").html();
        deleteData(id);
        par.remove();
    });

    $(".editBtn").on('click',function(){

        par = $(this).parent().parent();

        idElement = par.children("td:nth-child(1)");
        nameElement = par.children("td:nth-child(2)");
        priceElement = par.children("td:nth-child(3)");

        idElement.html("<input type='hidden' id='itemId' value='"+idElement.html()+"' />");
        nameElement.html("<input type='text' id='itemName' value='"+nameElement.html()+"' />");
        priceElement.html("<input type='text' id='itemPrice' value='"+priceElement.html()+"' />");
        
        par.children('td:nth-child(5)').children('button:nth-child(1)').hide();

        par.children('td:nth-child(5)').append("<button class='update'>Update</button>");
        par.children('td:nth-child(5)').append("<button class='cancel'>Cancel</button>");

        $(".update").bind("click",update);
        $(".cancel").bind("click",cancel);

        /*par.children('td:nth-child(5)').children('button:nth-child(2)').show();
        par.children('td:nth-child(5)').children('button:nth-child(3)').show();*/

    });

    function cancel(){
        $("#update").hide();
        $("#cancel").hide();
        $(this).parent().children('button:nth-child(1)').show();

        par = $(this).parent().parent();

        idElement = par.children("td:nth-child(1)");
        nameElement = par.children("td:nth-child(2)");
        priceElement = par.children("td:nth-child(3)");

        //idElement.html($(#itemName))
    }

    function update(){

        par = $(this).parent().parent();

        idElement = par.children("td:nth-child(1)").children('input');
        nameElement = par.children("td:nth-child(2)").children('input');
        priceElement = par.children("td:nth-child(3)").children('input');

        id = idElement.val();
        name = nameElement.val();
        price = priceElement.val();

        data = new Array();
        data['id'] = id;
        data['name'] = name;
        data['price'] = price;

        console.log(data);

        //editData(data);
    }

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
            //window.location.reload();
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
