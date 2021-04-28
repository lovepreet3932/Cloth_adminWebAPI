

$(document).ready(function () {
   
    Load();
});

const uri = "/api/Clothes";
      
        let all = null; 
    function getCount(data) {
        const theCount = $("#counter");
        if (data) {
            theCount.text("There are " + data + " Entries");
        } else {
            theCount.text("There are no data");
            alert("Empty");
        }
    }
    function Load() {
        $.ajax({
            type: "GET",
            url: uri,
            cache: false,
            success: function (data) {
                const tBody = $("#all");
                all = data;
                $(tBody).empty();
                getCount(data.length);
                $.each(data,
                    function (key, item) {
                        const tr = $("<tr></tr>")
                            .append($("<td></td>").text(item.brand))
                            .append($("<td></td>").text(item.name))
                            .append($("<td></td>").text(item.size))
                            .append($("<td></td>").text("$"+ item.price + "each"))
                            .append($("<td></td>").text(item.quntity))
                            .append($("<td></td>")
                                .append($("<button href='#editModal' data-toggle='modal' >Edit</button>)")
                                    .on("click",
                                        function () {
                                            editItem(item.id);
                                        })
                                )
                            )
                            .append(
                                $("<td></td>")
                                    .append(
                                        $('<button  href="#delete" data-toggle="modal" >Delete</button>')
                                            .on("click", function () {
                                                $("#delete-id").val(item.id);
                                            }
                                        )
                                        )
                                    );
                        tr.appendTo(tBody);
                    });
            }
        });
    }
    function addItem() {
        const item = {
           
             name: $("#add-name").val(),
            brand: $("#add-brand").val(),
            size: $("#add-size").val(),
            price: $("#add-price").val(),
            quntity: $("#add-quntity").val(),
            id: $("#add-id").val()
        };
        $.ajax({
            type: "POST",
            accepts: "application/json",
            url: uri,
            contentType: "application/json",
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("An Error");
            },
            success: function (result) {
                Load();
                $("#add-name").val("");
                $("#add-brand").val("");
                $("#add-size").val("");
                $("#add-price").val("");
                $("#add-quntity").val("");
                alert("added successfully");
            }
        });
    }
function deleteItem(id) {
    
        $.ajax({
            url: uri + "/" + id, 
            type: "DELETE",
            success: function (result) {
                Load();
            }
        });
    }
    function editItem(id) {
        $.each(all,
            function (key, item) {
                if (item.id === id) {
                    $("#edit-name").val(item.name); 
                    $("#edit-id").val(item.id);
                    $("#edit-brand").val(item.brand);
                    $("#edit-size").val(item.size);
                    $("#edit-price").val(item.price);
                    $("#edit-quntity").val(item.quntity);;
                }
            });
    }
        function saveItem() {
            const item = {
                name: $("#edit-name").val(),
                brand: $("#edit-brand").val(),
                size: $("#edit-size").val(),
                price: $("#edit-price").val(),
                quntity: $("#edit-quntity").val(),
                id: $("#edit-id").val()
            };
            alert("Save item");
            $.ajax({
                url: uri + "/" + $("#edit-id").val(),
                type: "PUT",
                accepts: "application/json",
                contentType: "application/json",
                data: JSON.stringify(item),
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("An Error");
                },
                success: function (result) {
                   
                    Load();
                }
            });
            return false;
        };
