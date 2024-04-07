module.exports = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://uni.aceadc.com",
        permanent: true,
      },
    ];
  },
};
