const post = {
  author: "TechAlberto",
  content: "Esto es un contenido",
  likes: [],
};

// Añado los likes
post.likes.push("Maria", "Angel", "Alberto");

// Quitamos el ultimo like
post.likes.pop();

// Resultados
console.log("Total de Likes: ", +post.likes.length);
console.log("Usuarios que dieron likes: ", post.likes);
console.log("Estructura del post", Object.keys(post));
