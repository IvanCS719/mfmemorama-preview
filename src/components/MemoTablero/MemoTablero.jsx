import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick, gano }) {

    return (
        <main className='mainContainerTablero'>
          <p className='titleText'>Hermosos Recuerdos de Pasada Glorias</p>
          <p className='ganasteText'>{gano ? '¡Bien Hecho!': '-'}</p>
        <div className='memoTablero'>
          
            {
                //sea mapea el arreglo con el contenido de la tarjetas, para crear cada tarjeta
                contenidoBarajeado.map((item, i) => {
                    //Se pasa la props correspondientes
                    return <MemoTarjetas key={`${i}_${item}`} memoTarjeta={item} animacion={animacion} handleMemoClick={handleMemoClick} />
                })
            }
        </div>
        </main>
    );
}

export default MemoTablero
