<template>
  <v-data-table
    :headers="headers"
    :items="events"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    props: {
      events: Array,
    },
    data () {
      return {
        headers: [
          { text: 'Id', value: 'id' },
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Tipo', value: 'event_type' },
          { text: 'Fecha', value: 'date' },
        ],
        desserts: [
          
        ],
      }
    },
  }
</script>