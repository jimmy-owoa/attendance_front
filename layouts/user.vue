<template>
  <v-app>
    <v-navigation-drawer app> </v-navigation-drawer>

    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.prevent="logout"> LOGOUT </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'users',
  middleware: 'usersAuth',
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>