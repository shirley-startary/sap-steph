const withImages = require('next-images');
module.exports = withImages({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
});
// module.exports = {
//   exportTrailingSlash: true,
//   exportPathMap: function() {
//     return {
//       '/': { page: '/' }
//     };
//   }
// };