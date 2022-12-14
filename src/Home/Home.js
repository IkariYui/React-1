import './Home.css'

import { Footer } from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div class="banner">

                </div>
            </section>
            <section>
                <div class="container my-5">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <h2>ACRU</h2>
                            <p>
                            Agustín Cruz nació el 4 de junio de 1997 en Tucumán, Argentina. En su infancia descubrió gracias a su padre, Víctor Cruz, la escritura y el manejo de la palabra, pues este era escritor. También le enseñó diferentes géneros musicales (rock, cumbia, folclore, etc.) que influenciaron su carrera musical.3​

                            A los 3 años de edad se mudó con sus padres a Buenos Aires. Con 11 años, luego de volver a Tucumán, empezó a estudiar en la Escuela Polivalente de Arte, una escuela pública donde descubrió la cultura hip hop. Agustín quería ser ilustrador, pero vio a compañeros de su escuela rapeando en los recreos y decidió conocer más sobre el hip hop.

                            Practicó las disciplinas del beatboxing y el grafiti, además de rapear. En 2014 asistió a una de sus primeras batallas en El Quinto Escalón. Ese mismo año publica un tema en YouTube titulado “Viejita Mía!”, dedicado a su madre.
                            Acru es uno de los raperos más admirados y respetados tanto por los seguidores del rap como por sus colegas. Gracias a su aporte a la cultura, tanto de manera individual como en colaboración con reconocidas figuras del género urbano, se transformó en el embajador del rap argento.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/Acru.jpg?alt=media&token=a3ebaaac-72d5-411c-a03c-bbcee9015844" class="img-fluid w-100"></img>
                        </div>

                        <div class="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acru_0.jpg?alt=media&token=1d8c0755-0658-4dbd-8708-2642ea9bdbe2" alt="" class="img-fluid w-100"/>
                        </div>
                        <div class="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acruConcierto.jpg?alt=media&token=90dcef42-6760-48bf-8d80-066778def5b4" alt="" class="img-fluid w-100"/>
                        </div>
                        <div class="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/cinemajuanguillermocuartas.appspot.com/o/acru-banner-2.webp?alt=media&token=0859f8ae-d938-48ac-ac2c-9749621c38a9" alt="" class="img-fluid w-100"/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
            
        </>
    )

}