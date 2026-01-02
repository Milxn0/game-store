import { Elysia } from "elysia";

const app = new Elysia();

app.get("/health", () => ({
  status: "ok",
}));

app.listen(3000);

console.log("Backend running on :3000");
