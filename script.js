function mostrarAlerta() {
    alert("pendiente");
}

const enviarFormulario = async (e) => {
    e.preventDefault()

    const input_name = document.getElementById('input_name').value.trim()
    const input_organizacion = document.getElementById('input_organizacion').value.trim()
    const input_email = document.getElementById('input_email').value.trim()
    const input_telefono = document.getElementById('input_telefono').value.trim()
    const input_mensaje = document.getElementById('input_mensaje').value.trim()
    
    const formData = new FormData();
    formData.append("name", input_name)
    formData.append("organizacion", input_organizacion)
    formData.append("email", input_email)
    formData.append("telefono", input_telefono)
    formData.append("mensaje", input_mensaje)

    const options = 
    {                     
        method: "POST",
        body: formData
    }

    const send_mail = await fetch('./mail.php', options)
    
    if(send_mail.status === 200){
        alert('Email enviado')
    }else{
        alert('No pudimos enviar el mail')
    }
}

