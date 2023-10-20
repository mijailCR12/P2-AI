<!-- pages/authors_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Edificios Information</h3>
     <p>This section presents information about Edificios</p>
   <ul>
     <li v-for="edificio in edificios" :key="edificio._id">
       <NuxtLink :to="`/edificios/`+edificio._id">{{ edificio.nombre }}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
	const { data: edificios } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Edificios?fields={"nombre":true}`)
</script>