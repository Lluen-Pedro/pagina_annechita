document.getElementById("anio").textContent = new Date().getFullYear();

    // Crear burbujas flotantes
    const contenedor = document.getElementById("burbujas");
    for (let i = 0; i < 18; i++) {
      const b = document.createElement("span");
      const tam = Math.random() * 40 + 10;
      b.style.width = b.style.height = tam + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = (Math.random() * 12 + 10) + "s";
      b.style.animationDelay = (Math.random() * 10) + "s";
      contenedor.appendChild(b);
    }