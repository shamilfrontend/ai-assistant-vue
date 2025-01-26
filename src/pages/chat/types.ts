export type Message = {
    from: 'author' | 'bot';
    name: string;
    imagePath: string;
    content: string;
    isTyping?: boolean;
};
