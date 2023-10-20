<!-- pages/authors_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Arquitectos Information</h3>
     <p>This section presents information about Arquitectos</p>
   <ul>
     <li v-for="arquitecto in arquitectos" :key="arquitecto._id">
       <NuxtLink :to="`/arquitectos/`+arquitecto._id">{{ arquitecto.nombre }}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
	const { data: arquitectos } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Arquitectos?fields={"nombre":true}`)
</script>