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
    ...mapState("church_annexes", ["events"]),
  },
  methods: {
    ...mapActions("church_annexes", ["fetchEvents"]),
  },
  created(){
    this.fetchEvents(this.$route.params.slug)
  }
};
</script>