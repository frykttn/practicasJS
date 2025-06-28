//notacion literal

const pelicula ={
    // Propiedades clave: valor
    titulo: 'episodio 3 la venganza de los siths',
    duracion: '2:20',
    anio: 2005,
    puntaje: 9.5,
    categoria: 'Ciencia ficcion',
    actores: ['Ewan Mcgregor', 'Hayden Christenseen'],
    // Metodos
    reproducir: function (){
        document.writeln(`<p>Comenzo la peli <b>${this.titulo}</b> </p>`)
    },
    detener: () =>{
         document.writeln(`<p>La peli se detuvo</p>`)
    }
}

// mostrar el objeto
console.log(pelicula)
document.writeln(pelicula)
document.writeln('<h1>Objeto pelicula</h1>')
document.writeln(`<p>Titulo: ${pelicula.titulo}</p>`)
document.writeln(`<p>Duracion: ${pelicula.duracion}</p>`)
document.writeln(`<p>Categoria: ${pelicula['categoria']}</p>`)

//agregar propiedades nuevas a mi objeto
pelicula.imdb = 7.6
document.writeln(`<p>imdb: ${pelicula.imdb}</p>`)

//modificar un abojeto
pelicula.imdb = 8
document.writeln(`<p>imdb: ${pelicula.imdb}</p>`)

//borrar propiedad de un objeto
delete pelicula.puntaje
console.log(pelicula)
document.writeln(`<p>puntaje: ${pelicula.puntaje}</p>`)

//usar los metodos del objeto
pelicula.reproducir()
pelicula.detener()
