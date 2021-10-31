const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true, strict: false });
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true, strict: false });
      }
    },
  },
};
