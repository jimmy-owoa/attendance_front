<template>
  <v-data-table
    :headers="headers"
    :items="events"
    :items-per-page="5"
    class="elevation-1"
  >
  <template
        v-slot:body="{ items }"
      >
        <tbody>
          <tr
            @click="showEvent(item)"
            v-for="item in items"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.event_type }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </template>
  </v-data-table>
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
    methods: {
      showEvent(event){
        this.$router.push(`reuniones/${event.id}`)
      }
    }
  }
</script>