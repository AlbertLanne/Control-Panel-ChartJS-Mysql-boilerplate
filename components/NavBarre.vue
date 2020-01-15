<template>
    <header class="border-b-2 flex flex-wrap items-center justify-between flex bg-background-tertiary">


      <div class="bg-white font-sans text-xl flex">
        <nav class="flex flex-col  sm:flex-row">

          <nuxt-link to="/"
                     class="button ml-8 ">
            Home page
          </nuxt-link>
          <nuxt-link to="/identification"
                     class="button ml-8 ">
            Identification
          </nuxt-link>
          <nuxt-link to="/creation"
                     class="button ">
            Création CF
          </nuxt-link>
          <nuxt-link to="/stock"
                     class="button ">
            Stock grillage
          </nuxt-link>
          <nuxt-link to="/consultation"
                     class="button ">
            Consultation etat CF
          </nuxt-link>
          <nuxt-link to="/pagechart"
                     class="button ">
            Statistique
          </nuxt-link>
        </nav>
      </div>
    </header>


</template>

<script>

    export default {
        name: "NavBarre",
    }

</script>

