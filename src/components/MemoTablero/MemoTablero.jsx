import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick, gano }) {

    return (
        <main className='mainContainerTablero'>
          <h1 className='titleText'>CHOCOMEMO</h1>
          <p className='ganasteText'>{gano ? '¡No Puej!': '-'}</p>
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
