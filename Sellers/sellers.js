function addItem() {
    document.getElementById("addItemForm").classList.remove("hidden");
    document.getElementById("verifyForm").classList.add("hidden");
    document.getElementById("main").classList.add("hidden");
}
function Hide() {
    document.getElementById("addItemForm").classList.add("hidden");
    document.getElementById("verifyForm").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
}

function verify() {
    document.getElementById("verifyForm").classList.remove("hidden");
    document.getElementById("addItemForm").classList.add("hidden");
    document.getElementById("main").classList.add("hidden");
}

async function check() {
    let products = await fetch('http://localhost:8000/products');
    let title = document.getElementById("sellername").innerHTML;
    jso = await products.json();
    jso.map(x => {
        if (x.seller == title) {
            document.getElementById("prodList").innerHTML += `<li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-12 h-12 rounded-full" src="../image/${x.image}" alt="product image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        ${x.productname}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        rating : ${x.rating}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        ${x.category}
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $${x.price}
                </div>
            </div>
        </li>`;
        }
    });
    let sellers = await fetch('http://localhost:8000/sellers');
    let user = document.getElementById("user").innerHTML;
    jso = await sellers.json();
    jso.map(x => {
        if (x.username == user && x.certified) {
            document.getElementById("sellername").innerHTML += `<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 max-h-5 mt-3">Certified</span>`;
        }
    });
}
check();