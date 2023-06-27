import { Task } from '../interfaces/task.interfaces';
declare class LeaderService {
    getTasksSubordinate(userId: string, subordinateId: string): Promise<any[]>;
    getSubordinates(userId: string): Promise<any[]>;
    createTask(userId: string, taskValue: Task): Promise<any>;
    updateTask(task: Task): Promise<any[]>;
}
export declare const leaderService: LeaderService;
export {};
