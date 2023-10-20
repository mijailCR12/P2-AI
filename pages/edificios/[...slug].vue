<!-- pages/books/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="six columns">
       <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${edificio.image.path}`">
     </div>
     <div class="six columns">
       <h3>{{edificio.nombre}}</h3>
       <hr>
          <ul>
            <h4>Caracteristicas</h4>
            <li>Altura:
              {{ edificio.altura }}
            </li>
            <li>Fecha de Construccion:
              {{edificio.fechaConstruccion}}
            </li>
            <li>Coste:
              {{edificio.coste}}
            </li>
            <li>Pisos:
              {{edificio.pisos}}
            </li>
            <li>Ciudad:
              <NuxtLink :to="`/ciudades/`+edificio.ciudadId._id">
       {{edificio.ciudad}}</NuxtLink>
            </li>
            <li>Arquitecto:
              <NuxtLink :to="`/arquitectos/`+edificio.arquitectoId._id">{{edificio.arquitecto}}</NuxtLink>
            </li>
          </ul>
          <hr>
     </div>
     <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
<script setup>
	const route = useRoute()
	const { data: edificio, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Edificios/${route.params.slug}`)
	refresh()
</script>
