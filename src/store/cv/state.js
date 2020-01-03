export default function () {
  return {
    generalData: {
      gender: '',
      firstname: '',
      lastname: '',
      postalcode: '',
      city: '',
      country: '',
      phone: '',
      email: ''
    },
    workExperiences: [{
      id: 1,
      range: {
        start: '',
        end: '',
        ongoing: false
      },
      position: 'Position',
      organization: '',
      description: 'beschreiben Sie Ihre Tätigkeit'
    }],
    educations: [{
      start: '',
      end: '',
      ongoing: false
    }]
  }
}
