<!-- pages/books/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="six columns">
       <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${arquitecto.image.path}`">
     </div>
     <div class="six columns">
       <h3>{{arquitecto.nombre}}</h3>
       <hr>
          <ul>
            <h4>Caracteristicas</h4>
            <li>Fecha Nacimiento	:
              {{ arquitecto.fechaNacimiento }}
            </li>
            <li>Nacionalidad:
              {{arquitecto.nacionalidad}}
            </li>
            <li>Educacion:
              {{arquitecto.educacion}}
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
	const { data: arquitecto,  } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Arquitectos/${route.params.slug}`)
  const { data: edificios, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Edificios?filter=%7B%22arquitectoId._id%22%3A%22${route.params.slug}%22%7D`);
refresh()
</script>
