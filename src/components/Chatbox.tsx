import { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import { UserMessage } from "./UserMessage";
import { ChatMessage } from "./ChatMessage";
import { chat } from "../services/chatService";

interface Message {
    id: number;
    type: "user" | "bot";
    text: string;
}

interface ChatboxProps {
    isChatClicked: boolean;
    setIsChatClicked: (value: boolean) => void;
}

export const Chatbox = ({ isChatClicked, setIsChatClicked }: ChatboxProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMessage: Message = { id: Date.now(), type: "user", text: trimmed };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        const { reply } = chat(trimmed);
        const botMessage: Message = { id: Date.now() + 1, type: "bot", text: reply };
        setMessages((prev) => [...prev, botMessage]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="z-[9999] fixed right-[2rem] bottom-[2rem] w-140 h-160 bg-amber-50 rounded-[3rem] border-solid border-4 border-primary flex flex-col">
            <div className="w-full h-[16%] bg-primary rounded-tl-[2.5rem] rounded-tr-[2.5rem] p-6 flex items-center relative">
                <h1 className="text-surface text-3xl font-headline font-semibold">Moonage Files Chatbot</h1>
                <button
                    className="cursor-pointer absolute right-[2rem] text-surface flex items-center justify-center"
                    onClick={() => setIsChatClicked(false)}
                >
                    <X size={34} />
                </button>
            </div>

            <div className="w-full flex-1 flex flex-col gap-[1rem] p-6 overflow-y-auto">
                {messages.map((msg) =>
                    msg.type === "user"
                        ? <UserMessage key={msg.id} message={msg.text} />
                        : <ChatMessage key={msg.id} message={msg.text} />
                )}
                <div ref={bottomRef} />
            </div>

            <div className="w-full h-[14%] bg-primary rounded-bl-[2.5rem] rounded-br-[2.5rem] p-2 flex items-center justify-center gap-[1.5rem]">
                <input
                    className="h-[80%] w-[70%] rounded-xl bg-surface p-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                />
                <button
                    className="h-14 w-15 bg-surface rounded-4xl flex items-center justify-center"
                    onClick={handleSend}
                >
                    <Send className="text-primary" size={32} />
                </button>
            </div>
        </div>
    );
};