import User from "../models/user.model";
import { green, white, yellow, red } from "chalk";
import { createUser } from "../services/user.services";

export const db_url: string =
  process.env.DB_URL || "mongodb://localhost:27017/cody-codes";

export const onDbConnectionSuccess = async () => {
  const areUsers = await User.find().limit(1);
  if (areUsers.length === 0) await seedAdmin();

  console.log(
    `${green("[Database]")} ${white("Database connection successful!")}`
  );
};

export const onDbConnectionFail = async (error: any) => {
  console.log(
    `${red("[Database]")} ${white("Database connection failed:")}`,
    error
  );
  process.exit(0);
};

export const seedAdmin = async () => {
  const email: string = process.env.ADMIN_EMAIL || "test@test.com";
  const pass: string = process.env.ADMIN_PASS || "testtest";
  console.log(
    `${yellow("[Database]")} ${white("No users found, seeding now...")}`
  );
  await createUser(email, pass, 1);
  console.log(`${green("[Database]")} ${white("Seed complete!")}`);
};
