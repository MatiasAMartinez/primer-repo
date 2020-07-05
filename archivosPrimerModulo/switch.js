//let menu = ['ravioles','milanesas','asado','pizza','canelones']

//let dia = 'lunes'

function frasesDeComida(menu,dia){

    switch (menu) {
        case 'ravioles':
            if(dia == 'lunes'){
                console.log('marche comida italiana')
             }else{
                 console.log('ravioles de mi abuela')
             }
            break;
        case 'milanesas':
            console.log('va con papas fritas')
            break;
        case 'asado':
            console.log('va con rusa y vino')
            break;
        case 'pizza':
            console.log('comida rapida')
            break;
        case 'canelones':
            console.log('los canelones que me comí!!!')
            break;
    
        default:
            console.log('no esta en el menu')
            break;
    }
    }
    
    frasesDeComida('ravioles')
    
    
    function verEdad(edad){
    
        switch (true) {
            case edad>18:
                console.log('es mayor de edad')
                break;
            case edad<18&&edad>15:
                console.log('es un adolescente')
                break;
            case edad>15:
                console.log('todavia es muy chico')
                break;
        
            default:
                break;
        }
    }
    
    //verEdad(35)
    