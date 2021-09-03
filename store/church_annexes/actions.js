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

export async function fetchMembers({ commit }, slug) {
  try {
    const { data } = await this.$axios.get(`church_annexes/${slug}/members`);
    commit("setMembers", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}

export async function fetchEventMembers({ commit }, params) {
  try {
    const { data } = await this.$axios.get(`church_annexes/${params.slug}/events/${params.event_id}/event_members`);
    commit("setEventMembers", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}

export async function fetchAttendees({ commit }, params) {
  try {
    const { data } = await this.$axios.get(`church_annexes/${params.slug}/events/${params.event_id}/attendees`);
    commit("setEventAttendees", data);
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}

export async function registerAttendee({ commit }, params) {
  try {
    const { data } = await this.$axios.post(`church_annexes/${params.slug}/events/${params.event_id}/register_attendee?member_id=${params.member_id}&temp=${params.temp}`);
    return data;
  } catch (e) {
    commit("eventsError", e.message);
  } finally { }
}