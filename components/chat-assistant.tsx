"use client";

import { useChatDB } from "@/hooks/use-chat-db";
import { ArrowUp, Bot, Loader2, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, isLoaded, saveMessage, clearMessages } = useChatDB();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setShowToast(false);
    setIsOpen(true);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userContent = input.trim();
    setInput("");
    setIsLoading(true);

    // Save user message
    await saveMessage("user", userContent);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            { role: "user", content: userContent },
          ],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        await saveMessage("assistant", data.message);
      } else {
        await saveMessage(
          "assistant",
          "Sorry, I encountered an error. Please try again or reach out via the contact page.",
        );
      }
    } catch {
      await saveMessage(
        "assistant",
        "Sorry, I'm having trouble connecting. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 md:inset-auto md:bottom-20 md:right-6 md:w-96 h-dvh md:h-120 bg-black/95 md:bg-gray-900/95 backdrop-blur-md border-t md:border border-white/20 md:rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white/80" />
              </div>
              <div>
                <span className="font-medium text-white text-sm">
                  AI Assistant
                </span>
                <p className="text-xs text-white/50">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearMessages}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Clear chat"
                title="Clear chat history"
              >
                <Trash2 className="h-4 w-4 text-white/50 hover:text-white/70" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 text-white/70" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {!isLoaded ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-white/50" />
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-white/15 text-white rounded-2xl rounded-br-md"
                        : "bg-white/5 text-white/90 rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-white/90 rounded-2xl rounded-bl-md px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-end gap-2 bg-white/5 border border-white/10 rounded-2xl p-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Message..."
                rows={1}
                disabled={isLoading}
                className="flex-1 px-2 py-1.5 bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none resize-none max-h-32 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white disabled:bg-white/20 disabled:cursor-not-allowed rounded-full transition-colors shrink-0"
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showToast && !isOpen && (
        <div className="fixed bottom-18 right-4 md:right-6 max-w-64 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-50 p-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowToast(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 border border-white/20 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3 text-white/70" />
          </button>
          <button
            onClick={handleOpenChat}
            className="text-left text-sm text-white/90 leading-relaxed"
          >
            Hey! 👋 Curious about Nyein? Ask me anything about his work and
            experience!
          </button>
        </div>
      )}

      <button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpenChat())}
        className={`fixed bottom-4 right-4 md:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-200 z-50 flex items-center justify-center ${isOpen ? "hidden md:flex" : ""}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <Bot className="h-5 w-5 text-white/80" />
        {!isOpen && !showToast && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black" />
        )}
      </button>
    </>
  );
}
