<!-- pages/books/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="six columns">
       <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${ciudad.image.path}`">
     </div>
     <div class="six columns">
       <h3>{{ciudad.nombre}}</h3>
       <hr>
          <ul>
            <h4>Caracteristicas</h4>
            <li>Pais:
              {{ ciudad.pais }}
            </li>
            <li>Poblacion:
              {{ciudad.poblacion}}
            </li>
            <li>Superficie:
              {{ciudad.superficie}}
            </li>
          </ul>
          <hr>
      <h4>Edificios</h4>
    <ul>
      <li v-for="edificio in edificios" :key="edificio._id">
        <NuxtLink :to="`/edificios/`+edificio._id">{{edificio.nombre}}</NuxtLink>
      </li>
    </ul>
     </div>
   </div>
   <FooterView />
 </div>
</template>
<script setup>
	const route = useRoute()
  // https://cms-una.000webhostapp.com/api/content/items/Edificios?filter=%7B%22ciudadId._id%22%3A%22ec88329d653930cb74000069%22%7D
	const { data: ciudad, } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Ciudades/${route.params.slug}`)
  const { data: edificios, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Edificios?filter=%7B%22ciudadId._id%22%3A%22${route.params.slug}%22%7D`);
refresh()
</script>
