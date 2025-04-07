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
        let id = req.params.id
        let mensaje = `Hola, mi nombre es ${heroes.lista[id-1].nombre} y soy ${heroes.lista[id-1].profesion}`
        res.render('heroes',{mensaje:mensaje})
    },
    bio: function(req,res){
        const id = req.params.id
        const ok = req.params.ok
        if(ok==true){
            let nombre = heroes.id.nombre
            let resena = heroes.id.resena
        }
        res.render('heroes',{mensaje:nombre,resena})


    }

}

module.exports = controller
