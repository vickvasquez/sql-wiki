# SQL Wiki

## π Estructura del proyecto

A continuaciΓ³n la estructura del proyecto:

```
/
βββ public/
β   βββ favicon.svg
βββ src/
β   βββ components/
β   β   βββ Card.astro
β   βββ layouts/
β   β   βββ Layout.astro
β   βββ pages/
β   β   βββ index.astro
|   β   βββ blog
|   β       βββ *.mdx
|   β   βββ guides
|   β       βββ *.mdx
|   βββ styles/
|   β   βββ *.css
|   βββ data/
|   βββ models/
βββ package.json
```

## π§ Scripts

Todos los scripts disponibles para correr el proyecto.

| Script             | AcciΓ³n                                           |
| :------------------| :----------------------------------------------- |
| `pnpm install`     | Instala las depenpendencias                      |
| `pnpm dev`         | Inicia el servidor en `localhost:3000`           |
| `pnpm build`       | Crea el proyecto para producciΓ³n `./dist/`       |
| `pnpm preview`     | Previsualiza el proyecto construido anteriormente|
| `pnpm create-post` | Crea un nuevo archivo automaticamente            |


## β‘οΈΒ Crear nuevo archivo automaticamente

Ejecutando el siguiente script podrΓ‘s crear un nuevo archivo `mdx` automaticamente con el frontmatter configurado.

```
 pnpm create-post --title="This a title of a post" --description="This a description of a post" --type="faq" --fileName="what-is-foo?"
```

## [Quiero contribuir](CONTRIBUTING.MD)

## TODO
 * Lint MDX
 * Lint astr tsx
 * Preview Deploy
 * Menu vertical en guΓ­as
 * PaginaciΓ³n en el listado de posts
 * Footer
 * Boton de leer mas posts

