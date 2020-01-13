<template>

    <div class="flex-grow ">
      <NavBarre/>
      <nuxt/>
    </div>
<!--  <NavFooter/>-->

</template>
<script>
  import NavBarre from "~/components/NavBarre.vue";
  import NavFooter from "~/components/NavFooter.vue";

  export default {
    components: {NavBarre, NavFooter}
  };
</script>
