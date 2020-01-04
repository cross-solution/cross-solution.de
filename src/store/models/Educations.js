import { Model } from '@vuex-orm/core'

export default class Educations extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'workExperiences'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.uid(),
      start: this.attr(''),
      end: this.attr(''),
      ongoing: this.boolean(false),
      position: this.attr(''),
      organization: this.attr(''),
      description: this.attr('')
    }
  }
}
