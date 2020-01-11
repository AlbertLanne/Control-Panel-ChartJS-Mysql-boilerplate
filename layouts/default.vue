<template>
  <div class=" bg-background-primary min-h-screen flex flex-col w-full justify-center h-full content-center content-wrapper"
       :class="theme">
    <div class="flex-grow ">
      <NavBarre/>
    <nuxt/>
    </div>
  </div>
</template>
<script>
  import NavBarre from "~/components/NavBarre.vue";
  export default {
  components: {NavBarre,}
  };
</script>
