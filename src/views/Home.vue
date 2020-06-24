<template>
  <div>
    <div>
    <div class="d-block tipografiatitulo">
      <h1 class="d-inline-block">Bienvenid@ al catálogo {{usuarioNombre.displayName}}</h1>
      <b-button class="ml-4 d-inline-block mb-3" variant="secondary" v-if="usuarioNombre.displayName" @click="logOutUser">Salir</b-button>
    </div>
    <div class="descrip">
      <p>Este es un sitio web de trabajos de diseño gráfico que forma un catálogo en comunidad, te invita a registrarte para generar una base de datos de diseñadores e interesados del área, además puedes subir tus trabajos y ser parte del catálogo del sitio, compartes tu contacto y además obtienes muchísimos otros!</p>
    </div>
    <div v-if="usuarioNombre.uid">
    </div>
    <div>
       <b-icon class="cambioicon" icon="chevron-double-up"></b-icon>
    <b-icon class="cambioicon" icon="eye-fill"></b-icon>
      
      <!-- botones -->
      <b-button type="submit" variant="primary" href="Login" class="mx-2 colornegro">Aún no te has logeado clic aquí</b-button>
      <b-button type="submit" variant="danger" href="Registrousuario" class="mx-2 colorrosa">Aún no te has registrado clic aquí</b-button>
    </div>
    <br>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides 1 -->
      <b-carousel-slide
        caption="Stand Polpaico"
        text="Diseño de Gráfica stand de 3×4 mts"
        img-src="https://paolasotomora.files.wordpress.com/2020/04/stand-polpaico.jpg?w=598&h=334"
      ></b-carousel-slide>

      <!-- Slides 2 -->
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/vista-superior-disenadora-grafica-trabajando-tableta-grafica-portatil_23-2147652935.jpg">
        <h1>Bienvenid@s!</h1>
      </b-carousel-slide>

      <!-- Slides 3 -->
      <b-carousel-slide img-src="https://paolasotomora.files.wordpress.com/2020/04/stand-hp.jpg?w=598&h=334"
      caption="Stand HP"
      text="Diseño de Gráfica stand de 10×6 mts"
      ></b-carousel-slide>

      <!-- Slides 4 -->
       <b-carousel-slide img-src="https://paolasotomora.files.wordpress.com/2013/03/dsc06117.jpg?w=1000&h="
      caption="Armables de Cartón"
      text="Figuras realizadas en reciclado y ploteado"
       ></b-carousel-slide>
    </b-carousel>
<br>
<br>
<h1 class="tipografiatitulo">Videos Recomendados</h1>
<br>
<div class="embed-responsive embed-responsive-16by9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/qf6FbdhNk7g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
	<div class="social">
		<a href="https://github.com/psotomomora"><img src="git.png" alt="github"></a>
		<a href="https://www.linkedin.com/in/paola-soto-75130726/"><img src="linkedin.png" alt="linkedin"></a>
		<a href="https://twitter.com/PaolaSoto"><img src="twitter.png" alt="twitter"></a>
		<a href="https://www.facebook.com/psotomora"><img src="facebook.png" alt="facebook"></a>
	</div>  
</div>
<b-navbar-brand class="imgnav">
  <img src="../assets/fondolibelulas-01-01.jpg">
</b-navbar-brand>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Home',
  computed: {
    usuarioNombre(){
      return this.$store.getters.enviandoUsuario
    }
  },
  methods: {
    logOutUser(){
      firebase.auth().signOut().then(()=>{
        let datosUser = {
          displayName:'',
          email: '',
          emailVerified: '',
          uid: ''
        };
        this.$store.dispatch('usurioRegistro',datosUser);
        this.$router.push('/login');
      })
    }
  },
}
</script>

<style>
.imgnav {
  width: 50%;
  align-content: center;
  margin-left: -5px;
}
.tipografiatitulo {
  font-family: 'MuseoModerno', cursive;
}
.cambioicon {
  height: 3%;
  width: 3%;
  fill: #2096aa;
}
.colornegro {
  background-color: black;
  border: black;
  font-family: 'MuseoModerno', cursive;
  margin-top: -20px;
}
.colorrosa {
  background-color: #CC0066;
  border: #CC0066;
  font-family: 'MuseoModerno', cursive;
  margin-top: -20px;
  margin-left: 20px;
}
.descrip {
  font-family: 'Trebuchet MS';
}
.fondofinalfiguras {
  width: 300px;
  height: 300px;
  color: aliceblue;
}
*{box-sizing:border-box;}

		.container{
			width:95%;
			max-width:900px;
			padding:32px 64px;
			margin:auto;
		}

		.social{
			/*las imágenes usadas tienen width de 48px*/
			width:48px;
			position:fixed;
			top:50px;
			right:0;
		}

		/* Extra centrado vertical*/

		.social{
			/*border:1px solid #000;*/
			top:50%;
			height:205px;
			/*para poner height 192 deberíamos haber indicado en el reset de estilos font-size:0;*/
			margin-top:-100px;
		}
</style>