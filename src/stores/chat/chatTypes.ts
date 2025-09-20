export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
    isFinished?: boolean;
    children?: Pick<Message,"content" | "role" | "timestamp">[];
    childrenIndex?: number;
}

export interface chatSession {
    id:number,
    title:string,
    conversation:Message[]
}
