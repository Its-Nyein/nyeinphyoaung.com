import { useCallback, useEffect, useState } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
}

const DB_NAME = "nyein-chat-db";
const STORE_NAME = "messages";
const DB_VERSION = 2;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      // Delete old store if exists and recreate
      if (db.objectStoreNames.contains(STORE_NAME)) {
        db.deleteObjectStore(STORE_NAME);
      }
      const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
      store.createIndex("createdAt", "createdAt", { unique: false });
    };
  });
}

async function addMessageToDB(message: Message) {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(message);
  } catch (error) {
    console.error("Failed to add message:", error);
  }
}

export function useChatDB() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load messages from IndexedDB on mount
  useEffect(() => {
    async function loadMessages() {
      try {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index("createdAt");
        const request = index.getAll();

        request.onsuccess = () => {
          const storedMessages = request.result as Message[];
          if (storedMessages.length === 0) {
            const welcomeMessage: Message = {
              id: "welcome",
              role: "assistant",
              content:
                "Hi! I'm Nyein's AI assistant. How can I help you today?",
              createdAt: Date.now(),
            };
            addMessageToDB(welcomeMessage);
            setMessages([welcomeMessage]);
          } else {
            setMessages(
              storedMessages.sort((a, b) => a.createdAt - b.createdAt),
            );
          }
          setIsLoaded(true);
        };

        request.onerror = () => {
          console.error("Failed to load messages:", request.error);
          setIsLoaded(true);
        };
      } catch (error) {
        console.error("Failed to open database:", error);
        setIsLoaded(true);
      }
    }

    loadMessages();
  }, []);

  const saveMessage = useCallback(
    async (role: "user" | "assistant", content: string): Promise<Message> => {
      const message: Message = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        role,
        content,
        createdAt: Date.now(),
      };

      await addMessageToDB(message);
      setMessages((prev) => [...prev, message]);
      return message;
    },
    [],
  );

  const clearMessages = useCallback(async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      store.clear();

      const welcomeMessage: Message = {
        id: "welcome",
        role: "assistant",
        content: "Hi! I'm Nyein's AI assistant. How can I help you today?",
        createdAt: Date.now(),
      };
      store.put(welcomeMessage);
      setMessages([welcomeMessage]);
    } catch (error) {
      console.error("Failed to clear messages:", error);
    }
  }, []);

  return {
    messages,
    isLoaded,
    saveMessage,
    clearMessages,
  };
}
