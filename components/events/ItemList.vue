<template>
  <v-form ref="form" v-model="valid" @submit.prevent="registerAttendee">
    <v-row>
      <v-col cols="8">
        <v-text-field
          label="Temperatura"
          required
          :rules="tempRules"
          v-model="temp"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="pt-5 mt-5">
        <v-btn small :disabled="!valid" type="submit" color="success">></v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    valid: false,
    temp: null,
    tempRules: [(v) => !!v || "Temperatura obligatoria"],
  }),
  methods: {
    registerAttendee() {
      let floatTemp = parseFloat(this.temp);
      if ( floatTemp < 37.8 && floatTemp >= 35.0){
        this.$emit("sendData", { item: this.item, temp: this.temp });
        this.permited();
      }else{
        this.denied();
      }
    },
    denied(){
        this.$swal({
        icon: "error",
        title: "Acceso denegado.",
        text: "La temperatura se encuentra fuera del rango normal.",
        timer: 4000,
        timerProgressBar: true,
      });
    },
    permited(){
        this.$swal({
        icon: "success",
        title: "Acceso concedido.",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  },
};
</script>

<style>
</style>