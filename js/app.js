const menu = document.getElementById("menuProyectos");

fetch("/bd.json")
    .then((response) => response.json())
    .then((data) => {
        data.proyectos.map((proyecto) => {
            const li = document.createElement("li");
            li.classList.add("dropdown-item");
            li.innerHTML = `<li><a class="nav-link" href="${proyecto.url}" target="_blank">${proyecto.texto}</a></li>`;
            menu.appendChild(li);
        });

    })

    .catch(error => console.error("Error al cargar el archivo JSON:", error));
    
