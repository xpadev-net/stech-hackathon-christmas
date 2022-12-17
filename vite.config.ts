import react from "@vitejs/plugin-react";
module.exports = {
  plugins: [
    react(),
  ],
  resolve:{
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
}