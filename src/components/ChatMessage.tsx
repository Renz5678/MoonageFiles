interface ChatMessage {
    message: String
}

export const ChatMessage = ({ message }: ChatMessage) => {
    return (
        <div className="mr-[40%] w-[60%] mt-2 mb-2 bg-amber-100 rounded-2xl p-4">
            <p className="text-primary text-xl break-words">{message}</p>
        </div>
    )
}