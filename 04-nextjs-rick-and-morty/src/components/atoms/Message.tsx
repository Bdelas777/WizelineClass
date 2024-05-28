interface MessageProps {
  error: boolean;
  message: string;
}

export function Message({ error, message }: MessageProps) {
  return (
    <span className={error ? "text-red-500" : "text-black"}>{message}</span>
  );
}
