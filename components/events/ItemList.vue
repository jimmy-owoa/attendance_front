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
    tempRules: [(v) => !!v || "Temp is required"],
  }),
  methods: {
    registerAttendee() {
      if (this.temp !== null && this.valid === true)
        this.$emit("sendData", { item: this.item, temp: this.temp });
    },
  },
};
</script>

<style>
</style>