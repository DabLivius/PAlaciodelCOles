// src/componentes/Tienda.jsx
import '../estilos/Tienda.css';
import empanadaImg from '../img/empandacarne.jpg';
import rellenoImg from '../img/relleno.jpg'
import pastelImg from '../img/pastelfrito.jpg'
import hamburguesaImg from '../img/hamburguesa.jpg'
import papaImg from '../img/papasrellenas.jpg'
import perroImg from '../img/Perro-Caliente.jpg'
import polloImg from '../img/pollo.jpg'
import picadaImg from '../img/MG_1606.jpg.webp'


export default function Tienda() {
  return (
    <>
      <header>
        Paco <img src="cold.jpg" height="50" width="50" alt="Logo" />
        <nav>
          <ul>
            <li><a href="tienda.html">Tienda</a></li>
            <li><a href="#">Carrito</a></li>
            <li><a href="#">Iniciar sesión</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Bienvenido a nuestra tienda de palacio de colesterol</h1>
      </main>

      <section className="menu">
        <div className="item">
          <img src={empanadaImg} alt="Empanadas de carne" />
          <h3>Empanadas</h3>
          <p className="price">$3.000</p>
          <a href="empanadas.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={pastelImg} alt="Pasteles fritos" />
          <h3>Pasteles fritos</h3>
          <p className="price">$3.000</p>
          <a href="pasteles.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={hamburguesaImg} alt="Hamburguesas" />
          <h3>Hamburguesas</h3>
          <p className="price">$12.000</p>
          <a href="hamburguesa.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={papaImg} alt="Papas rellenas" />
          <h3>Papas rellenas</h3>
          <p className="price">$3.000</p>
          <a href="papas.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={perroImg} alt="Perro-Caliente" />
          <h3>Perro Caliente</h3>
          <p className="price">$14.000</p>
          <a href="perrocaliente.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          < img src={polloImg} alt="Pollo a la Broster" />
          <h3>Pollo a la Broster</h3>
          <p className="price">$10.000</p>
          <a href="pollo.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={picadaImg} alt="Picada del palacio" />
          <h3>Picada del palacio</h3>
          <p className="price">$25.000</p>
          <a href="picadapalacio.html"><button className="buy-button">Comprar</button></a>
        </div>

        <div className="item">
          <img src={rellenoImg} alt="Relleno" />
          <h3>Relleno</h3>
          <p className="price">$16.000</p>
          <a href="relleno.html"><button className="buy-button">Comprar</button></a>
        </div>
      </section>
    </>
  );
}
