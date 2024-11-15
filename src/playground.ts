import { db } from "./server/db";

await db.user.create({
  data: {
    email: "jmw9871@gmail.com",
    fName: "richard",
    lName: "jeong",
  },
});

console.log("done");
