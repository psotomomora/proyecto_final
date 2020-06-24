<template>
    <div>
        <h1 class="tipo">Imágenes alta calidad descargables</h1>
        <br>
        <br>
        <b-table-simple class="tipotabla">
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Autor</th>
                    <th>Imagen</th>
                    <th>Descargar</th>
                </tr>
            
            </thead>
            <tbody>
                <tr v-for="(item, index) in fotos" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.author }}</td>
                    <td><img :src="item.download_url" width="auto" height="150px" :alt="item.id"></td>
                    <td><a :href="item.download_url">Click para descargar</a></td>
                </tr>
            </tbody>
        </b-table-simple>
    
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            fotos:null
        }
    },
    mounted (){
        console.log('hola mundo desde mounted');
        axios.get('https://picsum.photos/v2/list').then(respuesta=> {
            console.log(respuesta.data);
            this.fotos=respuesta.data
        })

    }
}
</script>

<style>
.tipo {
    font-family: 'MuseoModerno', cursive;
    text-align: center;
}
.tipotabla {
    font-family: 'Trebuchet MS';
    color: #CC0066;
    font-size: 17px;
}
</style>