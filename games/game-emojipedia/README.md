Se creo un método que se ingresa en el textarea y lo transformo. Como es un string, lo conveirto en array y lo recorro para encontrar una coincidencia. Si no está en el diccionario, retornará los elementos de word


const TransformToEmojipedi = (text) => {
    const newText = text.split(" ").map((word) => {
      return emojipedia[word] ?? word;
    });
    return newText.join(" ");
  }; 

OJO: Si tenemos un objeto cuyo key y valor tienen el mismo nombre, solo se escribe uno
const textStyle = { color };
const textStyle = { color: color };