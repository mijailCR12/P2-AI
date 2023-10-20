<!-- pages/index.vue -->
<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Los edificios mas altos del mundo</h2>
    <p>This website offers information on edificios, arquitectos and ciudades.</p>
    <ul>
      <li> <NuxtLink to="/ciudades_index">Ciudades information</NuxtLink></li>
      <li> <NuxtLink to="/arquitectos_index">Arquitectos information</NuxtLink></li>
      <li> <NuxtLink to="/edificios_index">Edificios information</NuxtLink></li>
    </ul>
   <FooterView />
 </div>
</template>