import{Task} from "./Task";
export type Priority= "low"|"medium"|"hight";

export interface Project {
    id:number;
    code: string;
    name: string;
    description?: string;
    start: Date;
    end?:Date;
    done: boolean;
    priority: Priority;
    tasks: Task[];
}