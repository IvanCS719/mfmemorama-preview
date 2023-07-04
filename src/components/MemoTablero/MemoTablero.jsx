import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick }) {

    return (
        <main className='memoTablero'>
            {
                //sea mapea el arreglo con el contenido de la tarjetas, para crear cada tarjeta
                contenidoBarajeado.map((item, i) => {
                    //Se pasa la props correspondientes
                    return <MemoTarjetas key={`${i}_${item}`} memoTarjeta={item} animacion={animacion} handleMemoClick={handleMemoClick} />
                })
            }
        </main>
    );
}

export default MemoTablero
