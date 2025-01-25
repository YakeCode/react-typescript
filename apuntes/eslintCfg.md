# Configuración de **eslint** React Y TS

instalación paso a paso

```Bash
npx eslint --init
```

**Opciones importantes**

- Forma de importación de los módulos : Recomendado **esm**
- Elegir si vamos a usar Typescript o no

**Configurar las reglas globales de react**

En el archivo _eslint.config.js_ añadir:

```javascript
{
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/react-in-tsx-scope": "off",
    },
  },

```
