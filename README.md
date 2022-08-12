# vue3-ts-template

A development template for vue3 + vue-router + pinia + typescript + vite-ssg + @vueuse/head

## Installation

```shell
npx degit a3510377/vue3-ts-template <your new project name>
```

## init

```shell
yarn install
```

## ⚙️ Development

```shell
yarn dev
```

### Build

```shell
yarn build
```

#### use Github Actions

set github Environment secrets

| key         | description        | required |
| ----------- | ------------------ | :------: |
| `TOKEN`     | Github Build Token |    ✅     |
| `VITE_BASE` | Vite Base url      |    ❌     |
| `HOSTNAME`  | SITEMAP_URL        |    ❌     |

## ️ Technologies

- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [vite-ssg](https://github.com/antfu/vite-ssg)
- [Typescript](https://www.typescriptlang.org/)
- [@vueuse/head](https://github.com/vueuse/head)
