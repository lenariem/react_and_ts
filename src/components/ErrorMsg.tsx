interface ErrorMsgProps {
    error: string;
}

export default function ErrorMsg({ error }: ErrorMsgProps) {
    return <p className="text-center text-red-600">Error: {error}</p>;
}
