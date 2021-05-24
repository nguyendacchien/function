let list_product = ["Sony Xperia", "Samsung Galaxy S20+", "Nokia 6", "Xiaomi Red Mi K30"]

function showProduct() {
    let textTable = ""
    for (let i = 0; i < list_product.length; i++) {
        textTable += '<tr>'
        textTable += '<td id="' + i + '">' + list_product[i] + '</td>'
        textTable += '<td><button onclick="editProduct(' + i + ')">Edit</button></td>'
        textTable += '<td><button onclick="deleteProduct(' + i + ')">Delete</button></td>'
        textTable += '</tr>'
    }
    document.getElementById('table').innerHTML = textTable;
}

showProduct()

function deleteProduct(product_id) {
    let check = confirm("Do you want to delete")
    if (check) {
        list_product.splice(product_id, 1);
    }
    showProduct()
    showNumberOfProduct(list_product.length)
}

function addProduct() {
    let pname = document.getElementById("product_name").value
    list_product.push(pname)
    showProduct()
    showNumberOfProduct(list_product.length)
}

function showNumberOfProduct(number) {
    document.getElementById("total").innerHTML = "Total Product : " + number
}

showNumberOfProduct(list_product.length);

function editProduct(product_id) {
    let edit = prompt("Input The Replaced Name ")
    list_product[product_id] = edit
    showProduct()
}