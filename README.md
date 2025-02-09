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
