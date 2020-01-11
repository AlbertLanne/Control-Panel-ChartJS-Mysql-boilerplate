<template>
  <div
    class=" bg-background-primary min-h-screen flex flex-col w-full justify-center h-full content-center content-wrapper">
    <div class="flex-grow ">
      <NavBarre/>
      <nuxt/>
    </div>

    <NavFooter/>
  </div>
</template>
<script>
  import NavBarre from "~/components/NavBarre.vue";
  import NavFooter from "~/components/NavFooter.vue";

  export default {
    components: {NavBarre, NavFooter}
  };
</script>
