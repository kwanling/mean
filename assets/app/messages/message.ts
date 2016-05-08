export class Message {
    content: string;
    username: string;
    messageId: string;
    userId: string;

    constructor (content: string, messageId?: string, username?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    };
}