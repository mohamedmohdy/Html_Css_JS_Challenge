let Product_Name_Input = document.getElementById('Product Name') ;
let Product_Price_Input = document.getElementById('Product Price');
let Product_category_Input = document.getElementById('Product category');
let product_Desc_Input = document.getElementById('product Desc') ;
let contanir_Inputs = document.getElementsByClassName('form');
let Add_product_Button = document.getElementById('Add_Putton') ;
let current_Index = 0 ;



let products = [] ;
if(JSON.parse(localStorage.getItem('products')) != null){
    products = JSON.parse(localStorage.getItem('products')) ;
    Display() ;
}




Add_product_Button.onclick = function(){
    if(Add_product_Button.innerHTML=="Add Product"){
        Add_product();
    }else{
        update_Product();
    }
    Display();
    reset_Value ();
}


function Add_product (){
    let product = {
        name:Product_Name_Input.value,
        price:Product_Price_Input.value,
        catogry:Product_category_Input.value,
        desc:product_Desc_Input.value,
    }
    products.push(product) ;
    localStorage.setItem('products' , JSON.stringify(products));
    
}



function Display (){
    let cartona = '' ;
    for(let i = 0 ; i<products.length ; i++){
        cartona+=`
    <tr>
       <td>${products[i].name}</td>
       <td class="price">${products[i].price}</td>
       <td>${products[i].catogry}</td>
       <td>${products[i].desc}</td>
       <td><button class="Button_Display_delet" onclick="delet_items(${i})">Delet</button></td>
       <td><button class="Button_Display_update" onclick="get_Info_Item(${i})">Update</button></td>
       </tr>
       `;
}
document.getElementById('table_Body').innerHTML = cartona;
}




function delet_items(index){
        products.splice(index,1);
        Display() ;
        localStorage.setItem('products' , JSON.stringify(products));
}



function get_Info_Item(Index){
    current_Index = Index ;
    var current_Product = products[Index];
    Product_Name_Input.value = current_Product.name;
    Product_Price_Input.value = current_Product.price;
    Product_category_Input.value = current_Product.catogry;
    product_Desc_Input.value = current_Product.desc ;
    Add_product_Button.innerHTML="update Product";

}


function update_Product(){
    let product = {
        name:Product_Name_Input.value,
        price:Product_Price_Input.value,
        catogry:Product_category_Input.value,
        desc:product_Desc_Input.value,
    }
    products[current_Index]=product;
    localStorage.setItem('products' , JSON.stringify(products));
}



function search(search_Text){
    let cartonat = '' ;
    for(let i = 0 ; i<products.length ; i++){
        if(products[i].name.toLowerCase().includes(search_Text.toLowerCase())){
            cartonat+=`
            <tr>
               <td>${products[i].name}</td>
               <td class="price">${products[i].price}</td>
               <td>${products[i].catogry}</td>
               <td>${products[i].desc}</td>
               <td><button class="Button_Display_delet" onclick="delet_items(${i})">Delet</button></td>
               <td><button class="Button_Display_update" onclick="get_Info_Item(${i})">Update</button></td>
            </tr>
               `;
        }
   
}
document.getElementById('table_Body').innerHTML = cartonat;
}




function reset_Value (){
    for(let i = 0 ; i<contanir_Inputs.length ; i++){
        contanir_Inputs[i].value = '' ;
    }
}
