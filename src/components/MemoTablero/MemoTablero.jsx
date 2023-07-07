import { useState } from 'react';
import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick, gano, iniciaText }) { 

    return (
        <main className='mainContainerTablero'>
            {iniciaText ? <div className="modal" >
                <p className='textWin'>¡VAMOS A VER<br/>QUE TAN AGUSAO<br/>EREJ!</p>
            </div> : null}
            {gano ? <div className="modal" >
                <p className='textWin'>¡NO PUEJ!<br/>¡ENCONTRAJTE TODOj<br/>LOJ PAREJ!</p>
            </div> : null}
            
            <h1 className='titleText'>CHOCOMEMO</h1>
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
