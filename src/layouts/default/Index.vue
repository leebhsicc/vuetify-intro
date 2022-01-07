<template>
  <v-app>
    <default-appbar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script>
import DefaultAppbar from './Appbar.vue'
import DefaultDrawer from './Drawer.vue'
import DefaultView from './View.vue'

export default {
  name: 'DefaultLayout',
  components: {
    DefaultAppbar,
    DefaultDrawer,
    DefaultView
  },
  data: () => ({
    drawer: false,
  }),
}
</script>

<style>

</style>