module.exports = {
  user_owns: (user_id, productOwner) => {
    return user_id === productOwner;
  },
  enough_credits: (user_credits, cost) => {
    return user_credits >= cost;
  },
};
