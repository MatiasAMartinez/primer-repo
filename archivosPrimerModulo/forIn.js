let alumno = {
    nombre: 'Nelson',
    apellido: 'Barrios',
    edad: 23,
    ciudad: 'Lanus',
    estudia: true,
    hobbies: ['Cine', 'Programación', 'Videosjuegos'],
    altura:1.69,
};
for(let propiedad in alumno){
    console.log(propiedad, alumno[propiedad])
};