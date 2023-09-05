var pelicula_1= {
    name : 'Taxi Driver',
    director : 'Martin Scorsese',
    isFree : false,
    price : 50
}

var pelicula_2 = {
    name : 'Amores Perros',
    director : 'Alejandro Gonzáles Iñárritu',
    isFree : true,
    price : 0
}

var pelicula_3 = {
    name : 'Los Olvidados',
    director : 'Luis Buñuel',
    isFree : false,
    price : 39.99
}

var pelicula_4 = {
    name : 'Donnie Darko',
    director : 'Richard Kelly',
    isFree : true,
    price : 0.0
}

var peliculas = [pelicula_1, pelicula_2, pelicula_3, pelicula_4];

name_film = prompt('Ingrese el nombre de la película: ');

for (i = 0; i < peliculas.length; i++) {
    if (name_film.toLowerCase() == peliculas[i].name.toLowerCase()){
        alert('El director es: ' + peliculas[i].director);
        //console.log(name_film.toLowerCase())
        if (peliculas[i].isFree){
            console.log('Usted puede ver la película.');
            break;
        } else{
            console.log('Usted debe pagar '+ peliculas[i].price + ' pesos para poder ver la película.');
            break;
        }
    }
}


var dayOfMonth = 11;
switch (dayOfMonth) {
    case 1:
        console.log('Enero');
        break;
    case 2: 
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8: 
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default:
        console.log('ese dia no existe');
        break;
}






