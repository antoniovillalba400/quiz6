async function cargarAnimes() {
    try {

        const respo = await fetch("https://api.jikan.moe/v4/seasons/2011/fall?sfw");
        const data = await respo.json();
        const tabla = document.getElementById("animeTabla");

  
        tabla.innerHTML = "";

  
        data.data.forEach(anime => {
            const titulo = anime.title_english || "No disponible";
            const sinopsis = anime.synopsis || "Sin sinopsis";
            const año = anime.year || "No disponible";
            const imagen = anime.images?.jpg?.image_url || ""; 
            const episodios = anime.episodes || "Desconocido";

            tabla.innerHTML += `
                <tr>
                    <td>${titulo}</td>
                    <td>${sinopsis}</td>
                    <td>${año}</td>
                    <td>
                        ${imagen ? `<img src="${imagen}" alt="${titulo}">` : 'Sin imagen'}
                    </td>
                    <td>${episodios}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error al cargar los animes:", error);
    }
}