import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <main>
        <div className="contenidoPrincipal">
          {/* <!-- Parrafo 1 --> */}
          <section className="m-3 p-4">
            <h1 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              VESTIMENTA
            </h1>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                No solo permite cubrir el cuerpo para que el frío del invierno
                no lo afecte sino que también en el plano estético le reportará
                a la persona placer, especialmente si se trata de alguien
                fanático de la moda y del buen parecido físico. la indumentaria
                ya no es tan importante como protección o diferenciación social
                sino como una especie de obra de arte en sí misma en la que
                diseñadores y artistas se unen para darle forma, y hay un
                público consumidor ávido por adquirirla porque la misma los
                ubica dentro del grupo que viste de acuerdo a la moda y las
                tendencias que se usan, hecho que reporta reconocimiento y
                valoración positiva en algunos contextos
              </p>
            </div>
          </section>

          {/* <!-- Parrafo Pestañas --> */}
          <section className="m-3 p-4">
            <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              ACCESORIOS
            </h2>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                Los complementos o accesorios son todas esas piezas que no son
                parte de las prendas de vestir, pero que se combinan con ellas
                para completar el atuendo. Estos complementos realzan el estilo,
                lo hacen más casual o más elegante, y destacan sus atributos. La
                importancia de los complementos radica en que pueden cambiar
                totalmente un outfit. Por ejemplo, un mismo vestido puede ser
                considerado para uso de día o de noche, de acuerdo a los
                accesorios que lo acompañen. La magia de los accesorios es que
                no hay que invertir grandes cantidades de dinero en ellos, con
                muy poco se puede lograr mucho, sólo hay que saber escogerlos y
                combinarlos de manera creativa. Otro atributo importante de los
                complementos es que muchos de ellos son atemporales, por lo
                tanto se pueden usar a través de los años, completando la ropa
                de cada temporada. Es el caso de las joyas, que son de los
                accesorios más utilizados, estas piezas son muy versátiles y
                elegantes.
              </p>
            </div>
          </section>

          {/* <!-- Parrafo Maquillaje Artístico --> */}
          <section className="m-3 p-4">
            <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              Maquillaje Artístico
            </h2>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                Normalmente, se trabaja con unos bocetos previos y se trata de
                adaptar el dibujo al cuerpo y al rostro. Las técnicas de
                aerógrafo en esta clase de dibujos, son esenciales para que el
                trabajo sea aún más perfecto. El maquillaje de fantasía o
                profesional se diferencia al maquillaje convencional en que en
                este último, se intenta disimular o dar un toque o un aspecto
                natural, sin embargo, en el de fantasía o artístico se busca
                todo lo contrario, se busca realzar y trabajar el surrealismo lo
                máximo posible, figuras de animales, monstruos, unicornios,
                dioses…y un sinfín de figuras más propias del cine y del teatro
                son tratadas con esta clase de maquillaje.
              </p>
              <p>
                {" "}
                Con esta clase de maquillaje, no nos referimos solo a aplicar
                color con pincel, sino también a extensiones de pelo, de piel,
                de telas originales y extravagantes que hagan aparentar lo que
                no se es a diferencia muy notoria del maquillaje natural y
                convencional.
              </p>
              <p></p>
            </div>
          </section>
        </div>
        {/* <div className="separador"> </div> */}
        {/* <!-- contenidoPrincipal --> */}
      </main>
    </>
  );
}

export default Home;
