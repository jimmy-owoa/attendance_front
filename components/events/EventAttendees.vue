<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Miembros</v-card-title>
          <v-list two-line>
            <template v-for="item in getEventMembers">
              <v-list-item :key="item.text">
                <v-col cols="4">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.legal_number }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <item-list :item="item" @sendData="addAttendee" :key="item.id"/>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Participantes registrados</v-card-title>
          <v-list two-line>
            <template v-for="item in getEventAttendees">
              <v-list-item :key="item.text" :disabled="loading" @click="removeAttendee(item)">
                <v-list-item-content>
                  <v-list-item-title>{{item.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.legal_number}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import ItemList from './ItemList.vue';
export default {
  components: { ItemList },
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters("church_annexes", ["getEventAttendees", "getEventMembers"]),
  },
  methods: {
    ...mapActions("church_annexes", ["registerAttendee"]),
    ...mapMutations("church_annexes", [
      "addEventAttendee",
      "removeEventAttendee",
    ]),
    addAttendee(data) {
      this.loading = true;
      this.registerAttendee({
        slug: this.$route.params.slug,
        event_id: this.$route.params.id,
        member_id: data.item.id,
        temp: data.temp
      });
      this.addEventAttendee(data.item);
      this.loading = false;
    },
    removeAttendee(item) {
      this.loading = true;
      this.registerAttendee({
        slug: this.$route.params.slug,
        event_id: this.$route.params.id,
        member_id: item.id,
      });
      this.removeEventAttendee(item);
      this.loading = false;
    },
  },
};
</script>

<style>
</style>