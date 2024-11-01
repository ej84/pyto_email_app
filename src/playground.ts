import { db } from "./server/db";

await db.user.create({
  data: {
    email: "test@gmail.com",
    fName: "richard",
    lName: "jeong",
  },
});

console.log("done");
