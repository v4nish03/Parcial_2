async function respuesta() {
    const pregunta_js = document.getElementById("pregunta").value;
    const gif = document.getElementById("gif");

    if(!pregunta_js.includes('?')){
        gif.textContent = "No";
        return;
    }

    try{
        const valdiacion = await fetch("https://yesno.wtf/api");
        if (!valdiacion.ok) throw new Error('Falla en la solicitud');
        const datos = await valdiacion.json();

        gif.innerHTML = `<p>${datos.answer.toUpperCase()}</p><img src="${datos.image}">`;
    }
    catch (error){
        gif.textContent = "Error";
    }
}

