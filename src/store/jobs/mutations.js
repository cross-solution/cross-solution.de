/*
export function someMutation (state) {
}
*/
// src/store/showcase/mutations.js
export const updateJobState = (state, job) => {
  state.title = job.title
  state.headerImage = job.headerImage
  state.organization = job.organization
  state.description = job.description
  state.location = job.location
  state.searching = job.searching
  state.tasksTitle = job.taskTitle
  state.tasksText = job.taskText
  state.qualificationsTitle = job.qualificationTitle
  state.qualificationsText = job.qualificationText
  state.benefitsTitle = job.benefitsTitle
  state.benefitsText = job.benefitsText
  state.contactTitle = job.contactTitle
  state.contactText = job.contactText
  state.apply.url = job.apply.url
  state.apply.email = job.apply.email
  state.apply.expanded.email = job.apply.expanded.email
  state.apply.expanded.url = job.apply.expanded.url
  state.apply.disabled = job.disabled
}
