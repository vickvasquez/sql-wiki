# SQL Wiki guía de contribución
Antes de empezar a contribuir, hay algunos puntos a tener en cuenta.

- El contenido de una pagina se escribe en archivos `*.mdx`
- Dependiendo del tipo de contenido `Tutorial` o `Conceptos` deberá colocarlo en su respectiva carpeta `pages/blog` o `pages/concepts`
- El nombre del archivo, será la ruta de la pagina: por ejemplo `/blog/test-feature.mdx` la ruta sería `/blog/test-feature`
- Un archivo `*.mdx` debe comenzar con *frontmatter* descrito en [Front-matter](#front-matter).

#### Front matter

El frontmatter siempre debe ir al principio del archivo, este es el encargado de definir el `titulo`, `descripción`, `fecha de creación`, `image`, `tags[]` de la pagina. Las `tags[]` e `image` son opcionales.

> Le fecha debe estar en el siguiente formato mes/dia/año: 02/05/2023

Aqui tienes un ejemplo en la pagina de [conceptos basicos de sql](src/pages/concepts/conceptos-basicos-de-sql.mdx)

```yaml
---
title: Conceptos basicos de SQL
description: SQL es un lenguaje de consulta estructurada
date: 02/07/2023
image: /path/image.png
tags:
  - SQL
  - Base de datos
  - MySQL
---
```
