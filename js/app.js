//selectores
const pacienteInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//eventos

pacienteInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
propietarioInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
telefonoInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
fechaInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
horaInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
sintomasInput.addEventListener('change', (e)=> {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);   
});
