import { createStore } from "vuex";

export default createStore({
  state: {
    messages: [
      {
        msg: "That sounds great. I’d be happy to discuss more.",
        sender: false,
      },
      {
        msg: "Could you send over some pictures of your dog, please?",
        sender: false,
      },
      {
        imgs: ["dog-image-1.jpg", "dog-image-2.jpg", "dog-image-3.jpg"],
        sender: true,
        class: "first",
      },
      {
        msg: "Here are a few pictures. She’s a happy girl!",
        sender: true,
      },
      {
        msg: "Can you make it?",
        sender: true,
      },
      {
        msg:
          "She looks so happy! The time we discussed works. How long shall I take her out for?",
        sender: false,
        class: "first",
      },
      {
        msg: "30 minute walk",
        price: 29,
        sender: false,
        radio: true,
      },
      {
        msg: "1 hour walk",
        price: 49,
        sender: false,
        radio: true,
      },
    ],
  },
  mutations: {
    addMessage(state, commit) {
      let message = { msg: commit, sender: true };
      if (state.messages[state.messages.length - 1].sender === false) {
        message.class = "first";
      }
      state.messages.push(message);
    },
  },
  actions: {},
  modules: {},
});
