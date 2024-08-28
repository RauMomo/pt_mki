// src/stores/homeStore.js
import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

export const selectedTab = atom(0);

export const searchParams = persistentAtom("");
