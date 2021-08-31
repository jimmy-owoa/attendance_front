<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="signIn"
    class="login-form"
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="primary" class="mr-4" type="submit">
      LOGIN
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password must have 6+ characters",
      (v) => (v && v.length >= 6) || "Password must have 6+ characters",
    ],
  }),
  methods: {
    signIn() {
      if (this.email !== "" && this.password !== "" && this.valid === true) {
        this.$auth
          .loginWith("user", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((res) => {
            this.$router.push("/users/dashboards");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.login-form {
  margin: 200px auto;
  max-width: 500px;
  width: 100%;
}
</style>