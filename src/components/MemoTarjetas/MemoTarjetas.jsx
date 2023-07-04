import './StyleMemoTarjeta.css'
import logo from '../../assets/logoBackTarjeta.png'

//Se reciben las props
function MemoTarjetas({ memoTarjeta, animacion, handleMemoClick }) {

    return (
        //Codicional para poder hacer click en la tarjeta
        <div className="memo-tarjeta" onClick={() => (!memoTarjeta.tarjetaGirada && !animacion) && handleMemoClick(memoTarjeta)}>
            {/*si la propieda tarjetaGirada es true, se le aplica la clase para girarla con css*/}
            <div className={`memo-tarjeta-inner ${memoTarjeta.tarjetaGirada && 'memo-tarjeta-Girada'}`}>
                <div className="memo-tarjeta-front">
                <img src={logo} className="memo-tarjeta-front-logo" alt="React logo" />
                </div>
                <div className="memo-tarjeta-back">
                    {/*para ver el contindo pricipal en la tarjeta*/}
                    {memoTarjeta.contenido}
                </div>
            </div>
        </div>
    );

}

export default MemoTarjetas