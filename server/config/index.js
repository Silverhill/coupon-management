export default {
  facebook:{
    apiKey: process.env.FBApiKey || 'dfksaldjfklsajfdklasddkfjas',
    secret: process.env.FBSecret || 'dfksaldjfklsajfdklasddkfjas'
  },
  google:{
    apiKey: process.env.GoogleApiKey || 'dfksaldjfklsajfdklasddkfjas',
    secret: process.env.GoogleSecret || 'dfksaldjfklsajfdklasddkfjas'
  },
  mailToken: process.env.MailToken || 'dfksaldjfklsajfdklasddkfjas'
}
