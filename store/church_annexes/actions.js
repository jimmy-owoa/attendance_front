export async function fetchEvents({ commit }, slug) {
  try {
    const { data } = await this.$axios.get(`church_annexes/${slug}/events`);
    commit("setEvents", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}

export async function fetchEvent({ commit }, params) {
  try {
    const { data } = await this.$axios.get(`church_annexes/${params.slug}/events/${params.id}`);
    commit("setEvent", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}