// system-notifications-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const systemNotifications = new mongooseClient.Schema({
    type: { type: String, default: 'info', required: true, index: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    slot: { type: String, required: true, index: true },
    language: { type: String, required: true, index: true },
    permanent: { type: Boolean, default: false },
    requireConfirmation: { type: Boolean, default: false },
    active: { type: Boolean, default: true, index: true },
    totalCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    wasSeeded: { type: Boolean }
  });

  return mongooseClient.model('systemNotifications', systemNotifications);
};
