<template>
  <v-app>
    <page-appbar />
    <page-view />
  </v-app>
</template>

<script>
import PageAppbar from './Appbar.vue'
import PageView from './View.vue'


export default {
  name: 'PageLayout',
  components: {
    PageAppbar,
    PageView
  }

}
</script>

<style>

</style>