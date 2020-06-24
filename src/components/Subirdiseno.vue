<template>
  <div>
    <h1 class="tipotitulo">{{ titulo }}</h1>

    <b-form class="tipoform" @submit.prevent="agregarCurso" @reset="onReset">
    <!-- nombre del diseño -->
      <b-form-group id="input-group-1" label="Nombre del diseño:" label-for="input-1">
        <b-form-input id="input-1" v-model="agregar" type="text" placeholder="Ingrese el nombre del diseño"></b-form-input>
      </b-form-group>
    <br>
    <!-- descripcion -->    
      <b-form-group id="input-group-2" label="Descripción de tu diseño:" label-for="input-2">
        <b-form-textarea id="textarea" v-model="descripcion" placeholder="Descripción del diseño..." rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>
      <br>
      <!-- imagen del diseño --> 
      <b-form-group id="input-group-1" label="Enlace de Imagen del Diseño:" label-for="input-1" description="Ingresa una URL de la imagen del diseño">
        <b-form-input id="input-1" v-model="imagen" type="text" placeholder="https://www.dominio.com/imagen.png"></b-form-input>
      </b-form-group>
      <br>
    <!-- completo --> 
      <b-form-checkbox id="checkbox-1" v-model="completo" value="true" unchecked-value="false">Completo</b-form-checkbox>
      <div>Completo: <strong>{{ completo }}</strong></div>

    <!-- botones -->
    <div class="mt-3">
      <b-button type="submit" variant="primary" class="mx-2 colornegro">Agregar</b-button>
      <b-button type="reset" variant="danger" class="mx-2 colorrosa">Borrar</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "Subirdiseno",
  data() {
    return {
      titulo: "Sube tu Diseño",
      agregar: "",
      descripcion: "",
      imagen: "",
      completo: false
    };
  },
  methods: {
    agregarCurso() {
      let datosCompletos = {
        name: this.agregar,
        image: this.imagen,
        description: this.descripcion,
        completed: this.completo
      }
      if (this.agregar && this.descripcion && this.imagen) {
        this.$store.dispatch("agregarDiseño", datosCompletos);
        this.agregar = "";
        this.imagen = "";
        this.completo = false;
        this.descripcion = "";
      } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa los datos solicitados',
            footer: '<b>Meganulon</b>'
          }); 
      }
    },
    onReset(){
      console.log("reset");
    }
  },
};
</script>
<style>
  .colornegro {
    background-color: black;
    border: black;
  }
  .colorosa {
    background-color: #CC0066;
    border: #CC0066;
  }
  .tipotitulo {
  font-family: 'MuseoModerno', cursive;
}
.tipoform {
  font-family: 'Trebuchet MS';
}
</style>