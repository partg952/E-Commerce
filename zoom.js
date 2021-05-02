let id = sessionStorage.getItem('id')
console.log(id)
fetch("https://fakestoreapi.com/products/"+id)
.then(res=>res.json())
.then(response=>{
    console.log(response)
    document.title = response.title
    let title = document.createElement('h1')
    let img = document.createElement('img')
    let price = document.createElement('h3')
    let description = document.createElement('h3')
    array=[title,img,price,description]
    for(let i=0;i<array.length;i++){
        document.body.appendChild(array[i])
    }
    title.textContent = response.title
    img.src = response.image
    price.textContent = "$"+response.price
    description.innerHTML = "Description: "+response.description

})