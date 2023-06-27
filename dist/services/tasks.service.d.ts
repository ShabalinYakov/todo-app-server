import { Task } from '../interfaces/task.interfaces';
declare class TasksService {
    getAllTasksViewer(userId: string): Promise<any[]>;
    createTask(userId: string, taskValue: Task): Promise<any>;
    isCreator(taskId: string, userId: string): Promise<any>;
    updateStatus(taskId: string, statusId: string): Promise<any>;
    updateTitle(taskId: string, statusId: string): Promise<any>;
    updateDescription(taskId: string, statusId: string): Promise<any>;
    updateDeadline(taskId: string, statusId: string): Promise<any>;
    updatePriority(taskId: string, statusId: string): Promise<any>;
}
export declare const tasksService: TasksService;
export {};
