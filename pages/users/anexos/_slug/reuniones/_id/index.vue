<template>
  <div v-if="getSelectedEvent" >
    <event-show :event="getSelectedEvent"/>
    <v-spacer class="pt-2"></v-spacer>
    <event-attendees/>
    <v-spacer class="pt-2"></v-spacer>
    <v-btn color="primary" to="/users/reuniones">Volver</v-btn>
  </div>
</template>

<script>
import EventShow from "~/components/events/EventShow.vue";
import { mapActions, mapGetters } from 'vuex';
import EventAttendees from '~/components/events/EventAttendees.vue';
export default {
  layout: 'user',
  components: { EventShow, EventAttendees },
  computed: {
    ...mapGetters("events", ["getSelectedEvent"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvent"]),
  },
  created() {
    this.fetchEvent(this.$route.params.id);
  },
};
</script>

<style>
</style>