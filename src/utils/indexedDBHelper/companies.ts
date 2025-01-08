import { openDB } from "idb";

const DB_NAME = "lendsqr_vendors";
const STORE_NAME = "companies";

export interface ICompany {
  data: string[],
  id: string,
}

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

export async function addCompanies(companies: ICompany) {
  const db = await initializeDB();
  await db.put(STORE_NAME, companies);
}


export async function getCompany(id: string) {
  const db = await initializeDB();
  return db.get(STORE_NAME, id);
}

export async function getAllCompanies() {
  const db = await initializeDB();
  return db.getAll(STORE_NAME);
}


export async function deleteCompany(id: string) {
  const db = await initializeDB();
  await db.delete(STORE_NAME, id);
}