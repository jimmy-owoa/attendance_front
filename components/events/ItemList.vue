<template>
  <v-row>
    <v-col cols="4">
      <v-text-field
        :key="item.id"
        label="Temperatura"
        required
        v-model="temp"
        type="number"
      ></v-text-field>
    </v-col>
    <v-col cols="2" class="pt-5 mt-5">
      <v-btn @click="call(item)" small>></v-btn>
    </v-col>
  </v-row>
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
    temp: null,
  }),
  methods: {
    call(item) {
      this.$emit("sendData", { item: item, temp: this.temp });
    },
  },
};
</script>

<style>
</style>