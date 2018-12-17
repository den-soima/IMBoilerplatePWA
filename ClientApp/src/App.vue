<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" width="270" app>
      <v-list>
        <v-list-tile
            v-for="item in menu"
            :key="item.title"
            :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="sidebar = !sidebar">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/modules" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn
              id="module-select"
              slot="activator"
              color="indigo"
              outline
          >
            {{module}}
          </v-btn>
          <v-list>
            <v-list-tile
                v-for="module in modules"
                :key="module.path"
                @click="loadModule(module)"
            >
              <v-list-tile-title>{{ module.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <v-spacer></v-spacer>
      <v-btn
          flat
          v-for="item in userMenuItems"
          :key="item.title"
          :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view>
        
      </router-view>
    </v-content>

  </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => {
            return {
                //appTitle: 'Awesome App',
                sidebar: false,

                userMenuItems: [
                    {title: 'Sign In', path: '/signin', icon: 'lock_open'}
                ],
                modules: [
                    {title: 'Production', path: 'production', icon: 'lock_open'},
                    {title: 'Line', path: 'line', icon: 'lock_open'},
                    {title: 'Energy', path: 'energy', icon: 'lock_open'}
                ],
            }
        },
        computed: {
            appTitle: function () {
                return this.$store.state.appTitle;
            },
            module: function () {
                return this.$store.state.module;
            },
            menu: function () {
                return this.$store.getters.moduleMenu;
            }
        },
        methods: {
            loadModule(module) {

                this.$router.push({path: module.path,});
                this.$store.commit('setModule', module.title);
            }
        }
    }
</script>

<style scoped>
  >>> #module-select {
    width: 200px;
  }
</style>
