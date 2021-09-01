<template>
  <div v-if="getSelectedEvent" >
    <event-show :event="getSelectedEvent"/>
    <v-spacer class="pt-2"></v-spacer>
    <event-attendees/>
    <v-spacer class="pt-2"></v-spacer>
    <v-btn color="primary" @click="goBack">Volver</v-btn>
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
    ...mapGetters("church_annexes", ["getSelectedEvent"]),
  },
  methods: {
    ...mapActions("church_annexes", ["fetchEvent"]),
    goBack(){
      this.$router.go(-1)
    }
  },
  created() {
    this.fetchEvent({slug: this.$route.params.slug, id: this.$route.params.id});
  },
};
</script>

<style>
</style>