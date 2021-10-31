const slugify = require("slugify");
slugify.extend({ "'": "-" });

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title, {
          lower: true,
          strict: true,
        });
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.slug = slugify(data.title, {
          lower: true,
          strict: true,
        });
      }
    },
  },
};
