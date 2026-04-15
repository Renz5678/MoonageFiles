interface UserMessageProps {
    message: String
}

export const UserMessage = ({ message }: UserMessageProps) => {
    return (
        <div className="ml-[40%] w-[60%] mt-2 mb-2 bg-primary rounded-2xl p-4">
            <p className="text-surface text-xl break-words">{message}</p>
        </div>
    )
}