<!-- pages/edificios/[...slug].vue -->
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
          <button
            class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            :data-item-id= "edificio._id"
            :data-item-name="edificio.nombre"
            :data-item-price="edificio.price"
            :data-item-image="`https://cms-una.000webhostapp.com/storage/uploads${edificio.image.path}`"
          >
            Buy Me!
          </button>
     </div>
     <utteranc/>
     <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener("snipcart.ready", function () {
      this.addItemEvent = window.Snipcart.events.on(
        "item.added",
        (cartItem) => {
          // console.log(cartItem)
        }
      );
    });
  },
};
// export default {
//   mounted() {
//     document.addEventListener("snipcart.ready", function () {
//       this.addItemEvent = window.Snipcart.events.on("item.added", (cartItem) => {
//         // Acciones después de añadir al carrito
//         console.log(cartItem);
//       });
//     }.bind(this));
//   },
// };
</script>
<script setup>
	const route = useRoute()
	const { data: edificio, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Edificios/${route.params.slug}`)
	refresh();
</script>

