<template>
  <v-app id="inspire" light>
    <v-navigation-drawer v-model="sidebar" width="270" app>
      <v-list
          dense
          v-for="item in menu"
          :key="item.title"
      >
        <v-list-tile v-if="!item.children" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
            v-else-if="item.children"
            :prepend-icon="item.icon"
            
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
              v-for="child in item.children"
              :key="child.title"
              :to="child.path"
          >
            <v-list-tile-action>
              <!--<v-icon>{{ child.icon }}</v-icon>-->
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="switchSidebar()">
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
                :key="module.title"
                :to="module.path"
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
    <v-content app>
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
                
                userMenuItems: [
                    {title: 'Sign In', path: '/signin', icon: 'lock_open'}
                ],
                modules: [
                    {title: 'Production', path: '/production', icon: 'lock_open'},
                    {title: 'Line', path: '/line', icon: 'lock_open'},
                    {title: 'Energy', path: '/energy', icon: 'lock_open'}
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
            },
            sidebar: {
               get:    function () {
                   return this.$store.state.sidebar;
               },
               set:    function () {
                   
               }
            }
        },
        methods: {
            switchSidebar() {
                this.$store.commit('switchSidebar', !this.sidebar);
            }
        }
    }
</script>

<style scoped>
  >>> #module-select {
    width: 200px;
  }
</style>
