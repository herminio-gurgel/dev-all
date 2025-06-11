const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.get("/api/v2/post/:id/click", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.devall.com.br/api/v2/post/${id}/click`,
      {
        maxRedirects: 0,
        validateStatus: (status) => status >= 200 && status < 400,
      },
    );

    const redirectUrl = response.headers.location;
    if (redirectUrl) {
      return res.redirect(302, redirectUrl);
    } else {
      return res.status(404).send("URL de redirecionamento não encontrada");
    }
  } catch (err) {
    console.error("Erro no redirecionamento:", err.message);
    return res.status(500).send("Erro ao buscar redirecionamento");
  }
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.devall.com.br",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api",
    },
  }),
);

app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
