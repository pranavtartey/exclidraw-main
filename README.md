<!--I use this repo link to add badges to my project--><!--https://github.com/Ileriayo/markdown-badges?tab=readme-ov-file#version-control-->
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

# Getting Started

This repo uses the `pnpm` package manager so make sure you have the `pnpm` package manager installed.

## Commands

To setup the database in docker run these commands:

### Run postgres container locally

```sh
docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

### Get the process id

```sh
docker ps
```

### ssh inside the container

```sh
docker exec -it < process-id >
```

### Now switch to the postgres user

```sh
psql -U postgres
```

### Setup dependencies
- Open new terminal
- `cd` into the `exclidraw-main` repo.

```sh
pnpm install
```

### Setup database

- Open new terminal
- `cd` into the `packages/db` directory in the `exclidraw-main` app
- Run the following command

```sh
cd packages/db
```

```sh
cp .env.example .env
```

```sh
npx prisma migrate dev
```

## To run all different services locally

On windows monorepo is a bit tricky to stop. So I suggent not to run:

```sh
npm run dev
```

## Do this instead

- Go to all the differnet services.
- Try running them saperately on different terminals
- To stop you can just do `ctrl+c`

> [!TIP]
> If you happen to start the project by running `npm run dev` directly then to stop the processes use `npx kill-port <8080>` --- in terminal opened as administrator to kill the app running on the port.

```sh
npx kill-port 3000 3001 8080 
```
