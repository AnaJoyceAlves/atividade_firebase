var dataRef = new Firebase('https://escola-3af81-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'Disciplina') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                $("#tbDisciplinas tbody").append(
    
                    `<tr> +
        
                        <td>${value2.Nome}</td> +

                        <td>${value2.CargaHoraria}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
