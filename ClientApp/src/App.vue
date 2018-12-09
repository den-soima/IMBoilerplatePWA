<template>
  <v-app>
    <NavBar/>
    <OEE/>
  </v-app>
</template>

<script>
    import NavBar from './components/NavBar'
    import OEE from './views/OEE'

    export default {
        name: 'App',
        components: {
            NavBar,
            OEE
        },
        data() {
            return {
                //
            }
        }
    }
</script>
