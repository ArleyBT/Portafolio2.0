class ValidadorFormulario {
    constructor(IdFormulario){
        this.form = document.getElementById(IdFormulario);
        // Seleccionar inputs
        this.username = document.getElementById('username');
        this.email = document.getElementById('email');
        this.mensaje = document.getElementById('Deja tu mensaje');

        //Seleccionar span de error
        this.usernameError = document.getElementById('usernameError');
        this.emailError = document.getElementById('emailError');
        this.mensajeError = document.getElementById('Deja tu mensaje Error');
    
        //Escuchar eventos del usuario
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); //Evitar el envio de formulario 

            if(this.ValidarFormulario()) {
                alert('Enviando informacion')
            }

        })
    }  
    
    ValidarFormulario(){
        let valid = true;
    
        if (this.username.value === '') {
            this.usernameError.textContent = 'EL nombre del usuarios es obligatorio'
            this.username.classList.add('error-imput')
            valid = false;
        } else {
            this.usernameError.textContent = '';
            this.username.classList.remove('error-input');
        } 
    }

    ValidarFormulario(){
        let valid = true;
    
        if (this.email.value === '') {
            this.emailError.textContent = 'EL email es obligatorio'
            this.email.classList.add('error-imput')
            valid = false;
        } else {
            this.emailError.textContent = '';
            this.email.classList.remove('error-input');
        } 
    }

}



