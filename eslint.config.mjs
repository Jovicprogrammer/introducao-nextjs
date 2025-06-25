module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals", // padrão do Next.js com performance
    "eslint:recommended",   // boas práticas básicas
    "plugin:react/recommended"
  ],
  rules: {
    // Desativa regras chatas:
    "no-unused-vars": "off",
    "no-console": "off",
    "@next/next/no-img-element": "off",
    "react/react-in-jsx-scope": "off", // não precisa com Next 12+

    // Personaliza como aviso em vez de erro:
    "react-hooks/exhaustive-deps": "warn",

    // Estilo livre:
    "quotes": "off",
    "semi": "off"
  }
};
