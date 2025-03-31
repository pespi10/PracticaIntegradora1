const controller = {
    index: function(req,res){
        let bienvenida = 'Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.'
        res.render('main',{
            mensaje:bienvenida})
    },
    creditos: function(req,res){
        let creditos = 'Hecho con ❤️ en Programación 2'
        res.render('main',{
            mensaje:creditos})
    }
}

module.exports= controller

