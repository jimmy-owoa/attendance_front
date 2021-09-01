export async function fetchEvents({ commit }, slug) {
  try {
    const { data } = await this.$axios.get(`events?slug=${slug}`);
    commit("setEvents", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}

export async function fetchEvent({ commit }, id) {
  try {
    const { data } = await this.$axios.get(`events/${id}`);
    commit("setEvent", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}