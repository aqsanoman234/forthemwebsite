$(document).ready(function(){
    for (const i of product) {
        $("#product").append(`
        <div class="col-lg-4">
            <div class="card" >
            <img src="${i.image}" alt="Avatar" style="width:18rem">
            <div class="container">
                <button id="${i.id}" class="readmore btn btn-primary" onclick="prodetail("${i.id}")">Shop now</button>
            </div> 
          </div>
    `)    
    }
    for (const i of product) {
        if(i.category == 'friend'){

            $("#product1").append(`
                <div class="col-lg-4">
                    <div class="card" >
                    <img src="${i.image}" alt="Avatar" style="width:18rem">
                    <div class="container">
                        <button id="${i.id}" class="readmore btn btn-primary" onclick="prodetail("${i.id}")">Shop now</button>
                    </div> 
                </div>
            `)    
        }    
    }
    $(".readmore").click(function(){
        var id = $(this).attr('id');
        sessionStorage.setItem("id",id);
        location.href = "customizedetail.html";
    })
})
