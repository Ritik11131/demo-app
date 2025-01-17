export interface IstatusCards {
    count: number;
    status: string;
    color:  "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined;
    avatarUrl: string;
}