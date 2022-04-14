import React from "react";

function Nosotros() {
  return (
    // <!--Jerarquia de empleados desde el fundador a empleados-->
    <main>
      <section>
        <h1 className="text-center pt-3 wow animate__animated animate__fadeInUp">
          ¿Quienes Somos?
        </h1>

        <div className="container wow animate__animated animate__fadeInUp">
          <article className="text-center p-4">
            <p>
              Gringa Sotre es una empresa dedicada a la venta online de ropa,
              accesorios y mackup. Nuestro objetivo es ofrecer la moda más
              actual a los mejores precios. Tenemos a su disposición una gran
              variedad de productos, los cuales son renovados cada temporada
              para dar siempre las prendas más trendy. Tenemos un equipo que
              está dedicado a satisfacer tus necesidades y que te contestará a
              tus dudas con la mayor brevedad posible. Para una mejor
              comunicación puedes contactar con nosotros a través de WhatsApp o
              mensaje privado de Facebook y tan sólo en unos minutos tu duda
              será resuelta.
            </p>
          </article>
        </div>
        {/* <!-- container --> */}
      </section>
    </main>
  );
}

export default Nosotros;
