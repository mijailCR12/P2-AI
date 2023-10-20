<!-- pages/authors_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Ciudades Information</h3>
     <p>This section presents information about ciudades</p>
   <ul>
     <li v-for="ciudad in ciudades" :key="ciudad._id">
       <NuxtLink :to="`/ciudades/`+ciudad._id">{{ ciudad.nombre }}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
	const { data: ciudades } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Ciudades?fields={"nombre":true}`)
</script>