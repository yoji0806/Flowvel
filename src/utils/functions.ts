import { functions } from "@/utils/firebase";
import { httpsCallable } from "firebase/functions";

export const testFunctions = httpsCallable(functions, "test");
export const streamingFcuntion = httpsCallable(functions, "streamingCall");
