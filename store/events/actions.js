export async function fetchEvents({ commit }) {
  try {
    const { data } = await this.$axios.get('events');
    commit("setEvents", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}