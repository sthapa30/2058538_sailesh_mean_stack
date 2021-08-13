function checkout(){
    let list: (any)[] = JSON.parse(sessionStorage.getItem('items') || "[]");
    let tableContent = ""
    let startTable = "<table border=1 cellpadding=3 class='table'><tr><th>Item Name</th><th>Price</th></tr>"
    let totalPrice = 0;

    for(let i = 0; i < list.length; i++){

        tableContent += "<tr><td>" + list[i].name + "</td><td>" + list[i].price + "</td></tr>"
        totalPrice += parseInt(list[i].price);
        
    }
    let endTable = "</table>"
    let tableData = document.getElementById("cartDetail");
    let total = document.getElementById("cartTotal");
    if(tableData != null){
        tableData.innerHTML = startTable + tableContent + endTable;
    }

    if(total != null){
        total.innerHTML = `Total Price: ${totalPrice}`;
    }

}