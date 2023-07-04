import { useState, useEffect } from 'react';
import MemoTablero from './MemoTablero';
import sonidoParEncontrado from '../../assets/sounds/successAudio.mp3'

//Arreglo local con contenido de prueba para cada tarjeta
const contenidoList = [...'🐒🦜🐓🥭🍅🥑🌞🌜'];
const successAudio = new Audio(sonidoParEncontrado);

function MemoLogica() {
  //constante para almacenar el contenido del memorama mezclado
  const [barajearTarjetas, setBarajearTarjetas] = useState([]);
  //constante para almacenar la carta que el usuario dio click
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  //constante para controlar la animación de ver las dos cartas que el usuario volteó
  const [animacion, setAnimacion] = useState(false);

  const [tarjetasEncontradas, setTarjetasEncontradas] = useState(0);

  /*función que recibe un arreglo del contenido del memorama duplicado 
  y retorna el mismo arreglo con los elemento mezclados*/
  const mezclarArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.floor(Math.random() * (i + 1)));
      /*EJemplo de intercambio, lo que hay en la posición a[j] pasa a la posición a[i]
       y lo que hay en la posición a[i] pasa a la posición a[j]*/
      [a[i], a[j]] = [a[j], a[i]];

    }
    return a;
  }

  //Al renderizar por primera vez el componente...
  useEffect(() => {
    //Se llama a la función mezclarArray, pasando un arreglo que concatena el contenido del memorama dos vez
    //el retorno se pasa al arreglo mezclarContenidoList
    const mezclarContenidoList = mezclarArray([...contenidoList, ...contenidoList]);
    //Se setea la constante barajearTarjetas con un arreglo de objetos, que contienen el indice, el continido, y el estado de que no esta girada
    setBarajearTarjetas(mezclarContenidoList.map((contenido, indice) => ({ index: indice, contenido, tarjetaGirada: false })))
  }, []);

  //función que se llama al hacer click en alguna tarjeta y recibe un objeto (con los datos de la tarjeta)
  const handleMemoClick = memoTarjeta => {
    //se crea objeto con los datos de la tarjeta y se modifica la propiedad tarjetaGirada a true
    const memoTarjetaGirada = { ...memoTarjeta, tarjetaGirada: true };
    //se crea una copia de todas las cartas del memorama 
    let barajearTarjetasCopia = [...barajearTarjetas];
    //se elimina y agrega el contenido de la tarjeta girada (actulización)
    barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjetaGirada);
    //se setea barajearTarjetas con el memorama modificado
    setBarajearTarjetas(barajearTarjetasCopia);

    //Se condiciona si no hay una tarjeta seleccionada, entonces se setea tarjetaSeleccionada
    if (tarjetaSeleccionada === null) {
      setTarjetaSeleccionada(memoTarjeta);
    }
    /*si ya hay una targeta seleccionacioda se compara la selección anterior con la nueva selección
    y si son iguales, las tarjetas quedan giradas y se setea tarjetaSeleccionada a null*/
    else if (tarjetaSeleccionada.contenido === memoTarjeta.contenido) {
      setTarjetaSeleccionada(null);
      setTarjetasEncontradas((tarjetasEncontradas) => tarjetasEncontradas + 1);
      //successAudio.ended();
      successAudio.volume = 0.5;
      successAudio.currentTime = 0;
      successAudio.play();



    }
    /*si no son iguales, se setea animacion a true, se hace una pausa donde las
    tarjetas se muestran por un 1seg. además de que ambas tarjetas vuelven a su estado inicial,
    y se seta tarjetaSeleccionada a null y animación a false*/
    else {
      setAnimacion(true);
      setTimeout(() => {
        barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjeta);
        barajearTarjetasCopia.splice(tarjetaSeleccionada.index, 1, tarjetaSeleccionada);
        setBarajearTarjetas(barajearTarjetasCopia);
        setTarjetaSeleccionada(null);
        setAnimacion(false);
      }, 1000);
    }

  };

  if (tarjetasEncontradas === contenidoList.length) {
    console.log("Ganaste");
  }
  console.log(barajearTarjetas)

  return (
    //Se pasan la props a tablero
    <MemoTablero contenidoBarajeado={barajearTarjetas} animacion={animacion} handleMemoClick={handleMemoClick} />
  );
}

export default MemoLogica
