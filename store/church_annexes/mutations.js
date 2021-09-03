import state from "./state";

export function setEvents(state, payload) {
  state.events = payload;
}

export function setEvent(state, event) {
  state.selectedEvent = event;
}

export function setMembers(state, members) {
  state.members = members;
}

export function setEventAttendees(state, attendees) {
  state.eventAttendees = attendees;
}

export function setEventMembers(state, members){
  state.eventMembers = members
}

export function addEventAttendee(state, member){
  state.eventMembers = state.eventMembers.filter((item) => item.id !== member.id)
  state.eventAttendees.push(member)
}

export function removeEventAttendee(state, member){
  state.eventMembers.push(member)
  state.eventAttendees = state.eventAttendees.filter((item) => item.id !== member.id)
}