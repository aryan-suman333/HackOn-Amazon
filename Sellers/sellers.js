function addItem() {
    document.getElementById("addItemForm").classList.remove("hidden");
    document.getElementById("verifyForm").classList.add("hidden");
    document.getElementById("prodList").classList.add("hidden");
}
function Hide() {
    document.getElementById("addItemForm").classList.add("hidden");
    document.getElementById("verifyForm").classList.add("hidden");
    document.getElementById("prodList").classList.remove("hidden");
}

function verify() {
    document.getElementById("verifyForm").classList.remove("hidden");
    document.getElementById("addItemForm").classList.add("hidden");
    document.getElementById("prodList").classList.add("hidden");
}

function itemSubmit() {
    // productname = document.getElementById("productname").value;
    // price = document.getElementById("price").value;
    // category = document.getElementById("category").value;
    // file_input = document.getElementById("file_input").files[0].name;
    // elecItems.push({"image":`${file_input}`},{"product":`${productname}`})
}