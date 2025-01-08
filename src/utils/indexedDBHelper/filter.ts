import { IFilterUserProps } from "@/interface/IFilterUser";
import { openDB } from "idb";

const DB_NAME = "filter_object";
const STORE_NAME = "filter";
const ID = "filterId"

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


export async function addFilter(filter: IFilterUserProps){
  const db = await initializeDB();
  await db.put(STORE_NAME, {...filter, id: ID});
}

export async function getFilter() {
  const db = await initializeDB();
  return db.get(STORE_NAME, ID);
}