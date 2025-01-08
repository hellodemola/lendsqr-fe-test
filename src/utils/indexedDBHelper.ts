import IUserResp from "@/interface/IUser";
import { openDB } from "idb";

const DB_NAME = "lendsqr";
const STORE_NAME = "users";

// Initialize the database
async function initializeDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
}

// Add a user to the database
export async function addUser(user: IUserResp) {
  const db = await initializeDB();
  console.log({user})
  await db.put(STORE_NAME, user);
}

// Get a user by ID
export async function getUser(id: string) {
  const db = await initializeDB();
  return db.get(STORE_NAME, id);
}

// Get all users
export async function getAllUsers() {
  const db = await initializeDB();
  return db.getAll(STORE_NAME);
}

// Remove a user by ID
export async function deleteUser(id: string) {
  const db = await initializeDB();
  await db.delete(STORE_NAME, id);
}