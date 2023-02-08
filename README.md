# SQL Wiki

## 🚀 Estructura del proyecto

A continuación la estructura del proyecto:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │   └── index.astro
|   │   └── blog
|   │       └── *.mdx
|   │   └── concepts
|   │       └── *.mdx
|   ├── styles/
|   │   ├── *.css
|   ├── data/
|   ├── models/
└── package.json
```

## 🧞 Scripts

Todos los scripts disponibles para correr el proyecto.

| Script             | Acción                                           |
| :------------------| :----------------------------------------------- |
| `pnpm install`     | Instala las depenpendencias                      |
| `pnpm dev`         | Inicia el servidor en `localhost:3000`           |
| `pnpm build`       | Crea el proyecto para producción `./dist/`       |
| `pnpm preview`     | Previsualiza el proyecto construido anteriormente|
| `pnpm create-post` | Crea un nuevo archivo automaticamente            |


## ⚡️ Crear nuevo archivo automaticamente

Ejecutando el siguiente script podrás crear un nuevo archivo `mdx` automaticamente con el frontmatter configurado.

```
 pnpm create-post --title="This a title of a post" --description="This a description of a post" --type="faq" --fileName="what-is-foo?"
```

## [Quiero contribuir](CONTRIBUTING.MD)

## TODO
 * Lint MDX
 * Lint astr tsx
 * Preview Deploy
 * Menu vertical en conceptos
 * Paginación en el listado de posts
 * Footer
 * Boton de leer mas posts

