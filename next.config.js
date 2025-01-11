module.exports = {
  trailingSlash: true,    // Ensures each page has a trailing slash
  output: 'export',       // Enables static export
  exportPathMap: async function () {
    return {
      '/': { page: '/' },  // Add other pages as necessary
    };
  },
  // basePath: '', // Uncomment if needed for subfolder deployment
};
