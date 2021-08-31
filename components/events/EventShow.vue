<template>
  <div>
    <v-card>
      <v-card-title>{{event.name}}</v-card-title>
      <v-card-subtitle>{{event.church_annex.name}} - {{event.date}}</v-card-subtitle>
      <v-card-text>{{event.description}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>