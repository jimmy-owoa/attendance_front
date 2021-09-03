<template>
  <div v-if="getSelectedEvent" >
    <event-show :event="getSelectedEvent"/>
    <v-spacer class="pt-2"></v-spacer>
    <div>
      <event-attendees/>
    </div>
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
    ...mapGetters("church_annexes", ["getSelectedEvent", "getMembers", "getEventAttendees"]),
    members: {
      get(){
        if (this.getEventAttendees && this.getMembers){
          let members = this.getMembers;
          let attendees = this.getEventAttendees;
          return members.filter(i => !attendees.filter(y => y.id === i.id).length); 
        }
      },
      set(val){}
    }
  },
  methods: {
    ...mapActions("church_annexes", ["fetchEvent", "fetchEventMembers", "fetchAttendees"]),
    goBack(){
      this.$router.go(-1)
    }
  },
  created() {
    this.fetchEvent({slug: this.$route.params.slug, id: this.$route.params.id});
    this.fetchEventMembers({
        slug: this.$route.params.slug,
        event_id: this.$route.params.id,
      });
      this.fetchAttendees({
        slug: this.$route.params.slug,
        event_id: this.$route.params.id,
      });
  },
};
</script>

<style>
</style>