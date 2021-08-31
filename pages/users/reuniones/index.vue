<template>
  <div>
    <events-list :events="events" v-if="events"/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import EventsList from "~/components/events/EventsList.vue";
export default {
  components: { EventsList },
  layout: "user",
  computed: {
    ...mapState("events", ["events"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
  },
  created(){
    this.fetchEvents()
  }
};
</script>