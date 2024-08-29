//selectores

const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');

const contenedorCitas = document.querySelector('#citas');

//Objetos
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}


//clases 

class Notificacion {
    constructor({texto, tipo}){
        this.texto = texto,
        this.tipo = tipo

        this.mostrar();
    }

    mostrar(){
        //crear notificaicon

        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center','w-full', 'p-3','text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        //eliminar alertas duplicadas

        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();
        

        //si es de tipo error agrega una clase

        this.tipo === 'error'? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        alerta.textContent = this.texto;

        //insertar en el dom

        document.body.appendChild(alerta);
        formulario.parentElement.insertBefore(alerta, formulario);

        //quitar despues de 5 segundos

        setTimeout(()=>{
            alerta.remove();
        },3000);
    }
}

class AdminCitas{

    constructor(){
        this.citas = [];
    }

    agregar(cita){
        this.citas = [...this.citas, cita];
        this.mostrar();

    }

    mostrar(){
        //limpiar html

        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        //genrando las citas con scripting

        this.citas.forEach(cita => {
            const divCita = document.createElement('DIV');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl');

            const paciente = document.createElement('P');
            paciente.classList.add('font-normal', 'mb-3', 'tgext-gray-700', 'normal-case');
            paciente.innerHTML = `<span class= "font-bold uppercase">Paciente: </span> ${cita.paciente}`


            //inyectar al html
            divCita.appendChild(paciente);

            contenedorCitas.appendChild(divCita);
        })
    }
}

//eventos

pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
telefonoInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
formulario.addEventListener('submit', subimitCita);


//funciones

function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas();

function subimitCita(e){
    e.preventDefault();

    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })

        return;
    }
    
    citas.agregar(citaObj);
    //this.mostrar();
}


