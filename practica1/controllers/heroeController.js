const heroes= require('../db/science')

const controller = {
    index:function(req,res){
        let nombres=[]
        for (let i = 0; i < heroes.lista.length; i++) {
            nombres.push(heroes.lista[i].nombre)
            
        }
        res.render('heroes',{mensaje:nombres})
    },
    detalle:function(req,res){
        const id = req.params.id
        heroes.lista(id-1).nombre
        const mensaje = `Hola, mi nombre es ${heroes.lista[id-1].nombre} y soy ${heroes.lista[id-1].profesion}`
        res.redner('heroes',
            {mensaje:mensaje})
    },
    bio: function(req,res){

    }

}

module.exports = controller
