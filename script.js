//FUNCION NOMBRE ALEATORIO

const nombres = ["Pablo", "Marc", "Cesar", "Caro", "Casandra", "Hector", "Fernando", "Cristina"];
const apellidos = ["Garcia", "Fernandez", "Martinez", "Herrero", "Lima", "Ferreti", "Morales"];
 
function randomName(nombres, apellidos){
    return nombres[Math.floor(Math.random()*nombres.length)] + " " + apellidos[Math.floor(Math.random()*apellidos.length)]
}

//CLASE POST

class Post {
    constructor(title, author, body,id){
        
        this.title = title, 
        this.author = author,
        this.body = body,
        this.id = id
    }
}

//GET POSTS
let arr = [];

const getPosts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/posts');

        if(response.ok){
            const result =  await response.json()
            console.log(result)
            
            let i= arr.length;
            for await (let blog of result.posts) {
                let post = new Post( blog.title, randomName(nombres, apellidos), blog.body, i);
                arr.push(post);
                document.getElementById("table-body").innerHTML += `<tr id="fila${i}"> <td>${post.title}</td> <td>${post.author}</td> <td>${post.body}</td> <td><button class="deleteBtn btn btn-danger" onclick="deletePost(${i})">Borrar</button></td></tr>`
                i +=1;
              }
       
            
        }
        
    } catch(error){
        console.log(error);
    }
}

//BOTON GET POSTS 1 VEZ
const newRow = document.getElementById("new-row")

newRow.addEventListener('click', function() {
     getPosts();
     newRow.remove();
});





//  AÑADIR UN POST NUEVO CON UN FORMULARIO
  document.getElementById("postForm")
    .addEventListener('click', function(e){
    e.preventDefault();
    
    let i = arr.length;
    const titulo = document.getElementById("formTitulo").value;   
    const autor = document.getElementById("formAutor").value;
    const contenido = document.getElementById("formContenido").value;
    
    
    let post = new Post(titulo, autor, contenido, i);
    arr.push(post)
    
    
    document.getElementById("table-body").innerHTML += `<tr id="fila${i}"> <td>${titulo}</td> <td>${autor}</td> <td>${contenido}</td> <td><button class="deleteBtn btn btn-danger" onclick="deletePost(${i})"</td>Borrar</button></tr> `
    window.modalform.close();

  })

  //BORRAR UN POST
  function deletePost (i){
    console.log(i);
   console.log(document.getElementById(`fila${i}`).remove())
    
    
  
  }

  


  


  
  
 








