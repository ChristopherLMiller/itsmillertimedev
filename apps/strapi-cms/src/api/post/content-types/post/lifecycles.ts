import { count } from "@wordpress/wordcount";

module.exports = {
  beforeCreate(event) {
    if (event.params.data.content) {
      event.params.data.wordCount = count(event.params.data.content, "words");
    }
  },

  beforeUpdate(event) {
    if (event.params.data.content) {
      event.params.data.wordCount = count(event.params.data.content, "words");
    }
  },
};
