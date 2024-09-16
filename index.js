const form = document.querySelector('#formulario')
const inputNombreCompleto = document.querySelector('#nombreCompleto')
const inputDni = document.querySelector("#dni");
const inputCobertura = document.querySelector("#cobertura");
const inputOp = document.querySelector("#op");
const inputEspecialidad = document.querySelector("#especialidad")
const inputMedico = document.querySelector("#medico");
let nombreCompletoEstado = false

const obrasSocialesyPrepagas = ["Union Personal", "Accord Salud", "OSDE", "OSECAC", "Otra"]
const medicosData = [
    {
    especialidad: 1,
    medico: "Dra. Juana López"
    },
    {
        especialidad: 1,
        medico: "Dr. Juan Amadeo"
    },
    {
        especialidad: 2,
        medico: "Dra. Nancy Torres"
    },
    {
        especialidad: 2,
        medico: "Dr. Gerardo Ibarra"
    },
    {
        especialidad: 3,
        medico: "Dr. Luis Giolito"
    },
        
]

inputCobertura.addEventListener('change', function(){
    let coberturaValor = inputCobertura.value
     
     while (inputOp.length) {
        inputOp.remove(0);
    }

    if(coberturaValor == "2" || coberturaValor == "3"){
       document.querySelector('.segundoSelect').classList.remove('d-none')
        obrasSocialesyPrepagas.forEach(e => {
            let option = document.createElement('option')
            option.value = e
            option.text = e
            inputOp.append(option)
        })
    } else {
        document.querySelector('.segundoSelect').classList.add('d-none')
    }
   
})

inputEspecialidad.addEventListener('change', function(){
    let valorEspecialidad = inputEspecialidad.value;
    while (inputMedico.length) {
        inputMedico.remove(0);
    }
    let medico = medicosData.filter((medico) => medico.especialidad == valorEspecialidad);
    if(valorEspecialidad == '1' ||valorEspecialidad == '2' || valorEspecialidad == '3'){
        document.querySelector('.tercerSelect').classList.remove('d-none')
        medico.forEach(e =>{
            let option = document.createElement('option')
            option.text= e.medico
            option.value= e.medico
            inputMedico.append(option)
        })
    } else {
        document.querySelector('.tercerSelect').classList.add('d-none')
    }
 
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valor = inputNombreCompleto.value.trim().split(/\s/)
    if(valor.length == 2){
        document.querySelector('.error-nombreCompleto').classList.add('d-none')
        nombreCompletoEstado =true
    } else {
        nombreCompletoEstado = false
        document.querySelector('.error-nombreCompleto').classList.remove('d-none')
    }

    if(this.checkValidity && nombreCompletoEstado){
// Mostrar el modal usando Bootstrap
        var miModal = new bootstrap.Modal(document.getElementById('miModal'));
        miModal.show();
        document.getElementById("formulario").reset();
        document.querySelector('.tercerSelect').classList.add('d-none')
        document.querySelector('.segundoSelect').classList.add('d-none')
    }
   
})