/*
export function someMutation (state) {
}
*/
// src/store/showcase/mutations.js
export const updateWorkExperiences = (state, v) => {
  state.cv.workExperiences[v.id].position = v.position
}
