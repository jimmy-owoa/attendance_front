<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Registro de miembro</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Nombres"
                    required
                    :rules="nameRules"
                    v-model="user.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Apellidos"
                    :rules="lastnameRules"
                    v-model="user.lastname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Rut"
                    hint="Número de identificación RUT/DNI"
                    persistent-hint
                    required
                    :rules="legalNumberRules"
                    v-model="user.legal_number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Correo"
                    required
                    :rules="emailRules"
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Teléfono de contacto"
                    required
                    type="number"
                    class="phoneNumber"
                    :rules="phoneRules"
                    v-model="user.phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    label="¿Habilitado?"
                    v-model="user.enabled"
                    :value="user.enabled"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Cancelar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="registerUser"
              :disabled="!valid"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data: () => ({
    user: {
      name: "",
      lastname: "",
      legal_number: "",
      email: "",
      enabled: false,
      phone: "",
    },
    valid: true,
    dialog: false,
    emailRules: [
      (v) => !!v || "Debe ingresar un correo",
      (v) => /.+@.+\..+/.test(v) || "Correo inválido",
    ],
    nameRules: [(v) => !!v || "Este campo no puede estar vacío"],
    lastnameRules: [(v) => !!v || "Este campo no puede estar vacío"],
    phoneRules: [(v) => !!v || "Este campo no puede estar vacío"],
    legalNumberRules: [(v) => !!v || "Este campo no puede estar vacío"],
  }),
  methods: {
    ...mapActions("church_annexes", ["fetchEventMembers"]),
    registerUser() {
      if (this.valid === true) {
        this.createUser();
      }
    },
    createUser() {
      this.$axios
        .post(`church_annexes/${this.$route.params.slug}/members`, this.user)
        .then((response) => {
          this.launchMessage(response.data);
          this.fetchEventMembers({
            slug: this.$route.params.slug,
            event_id: this.$route.params.id,
          });
        })
        .catch((e) => {
          this.launchErrorMessage(e);
        });
        this.dialog = false
    },
    launchMessage(response) {
      console.log(response.message);
      if (response.message == "Member created") {
        this.$swal({
          icon: "success",
          title: "Miembro creado!.",
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Hubo un error.",
          text: response.message,
        });
      }
    },
    launchErrorMessage(e) {
      this.$swal({
        icon: "error catch",
        title: "Hubo un error.",
        text: e,
      });
    },
  },
};
</script>

<style>
.phoneNumber input[type="number"] {
  -moz-appearance: textfield;
}
.phoneNumber input::-webkit-outer-spin-button,
.phoneNumber input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>