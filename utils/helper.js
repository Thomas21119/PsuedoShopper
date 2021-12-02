module.exports = {
  user_owns: (user_id, productOwner) => {
    return user_id === productOwner;
  },
};
