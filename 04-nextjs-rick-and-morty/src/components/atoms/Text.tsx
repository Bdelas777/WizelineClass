interface TextProps {
    text: string
}

export function Text({
    text
}: TextProps){
    return <p className="text-md">{text}</p>
}