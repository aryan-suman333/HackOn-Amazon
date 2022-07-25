async function check(){
    let products = await fetch('http://localhost:8000/products');
    let category = document.getElementById("category").innerHTML;
    jso = await products.json();
    jso.map(x => {
        if(x.category == category){
            let seller = x.seller.substr(0,4);
            document.getElementById("prodList").innerHTML += `<div class="my-4 max-w-sm h-fit bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg max-h-72" src="../image/${x.image}" alt="product image">
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${x.productname}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    Rating:
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">${x.rating}</span>
                    
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex ${seller}">Seller: ${x.seller}</p>
                <div class="flex justify-between items-center">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$${x.price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>`;
        }
    });
    let ex = await fetch('http://localhost:8000/sellers');
    sellers = await ex.json();
    sellers.map(x => {
        if(x.certified){
            let name = x.name.substr(0,4);
            let doc = document.getElementsByClassName(name);
            for(i = 0;i < document.getElementsByClassName(name).length;i++){
                document.getElementsByClassName(name)[i].innerHTML += `<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-1 mt-1 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Certified</span>`;
            }
        }
    });
}
check();