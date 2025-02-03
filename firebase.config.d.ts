declare module "firebase.config" {
  import { FirebaseApp } from "firebase/app";
  import { Auth } from "firebase/auth";
  import { Database } from "firebase/database";

  export const app: FirebaseApp;
  export const auth: Auth;
  export const database: Database;
}
