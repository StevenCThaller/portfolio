import { green, blue, white } from "chalk";

export const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;

export const onListen: () => void = () =>
  console.log(
    `${green("[Server]")} ${white("Express server listening on port")} ${blue(
      port
    )}`
  );
