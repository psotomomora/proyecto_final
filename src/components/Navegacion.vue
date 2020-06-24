<template>
  <div class="cambio">
      <div>
          <img src="dibujo.png">
      </div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
            <router-link class="navbar-brand tipotitulo" to="/"><h1>Inicio Meganulon</h1></router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto delform">
                <b-nav-form>
                    <router-link class="nav-link" to="/login">Logéate</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/registrousuario">Regístrate</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/agregar">Sube tus diseños</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/ver">Revisa el Catálogo</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/bancodefotos">Banco de fotos</router-link>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <img src="dibujo3.png">
  </div>
</template>

<script>


export default {
    name: 'navbar'
}
</script>
<style>
.cambio {
    background-color: black;
    font-size: 20px;
    height: 220px;
    font-family: 'MuseoModerno', cursive;
}
.tipotitulo {
    font-size: 50px;
    margin-left: 100px;
}
.info {
    background-color: black;
}
.navbar-brand {
    margin-left: 53px;
}
.delform {
    margin-right: 90px;
    font-family: 'Trebuchet MS';
}
</style>