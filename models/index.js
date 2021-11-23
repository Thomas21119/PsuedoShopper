const User = require("./User");
const Message = require("./Message");

Gallery.hasMany(Messages, {
  foreignKey: "user_id",
});

Painting.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Message };
