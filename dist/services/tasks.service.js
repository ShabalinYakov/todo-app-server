"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksService = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../databases"));
class TasksService {
    async getAllTasksViewer(userId) {
        try {
            const { rows: tasks } = await databases_1.default.query('SELECT * FROM get_tasks_viewer($1);', [userId]);
            return tasks;
        }
        catch (error) {
            console.log(error);
        }
    }
    async createTask(userId, taskValue) {
        const { title, description, priority, deadline } = taskValue;
        const status = 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97';
        const client = await databases_1.default.connect();
        try {
            await client.query('BEGIN');
            const { rows } = await client.query(`INSERT INTO tasks(title, description, deadline) VALUES($1, $2, $3) RETURNING *`, [title, description, deadline]);
            const task_id = rows[0].id;
            await client.query(`INSERT INTO tasks_priorities(task_id, priority_id) VALUES($1, $2)`, [task_id, priority]);
            await client.query(`INSERT INTO tasks_statuses(task_id, status_id) VALUES($1, $2)`, [task_id, status]);
            await client.query(`INSERT INTO creators_tasks(user_id, task_id) VALUES($1, $2)`, [userId, task_id]);
            await client.query(`INSERT INTO responsibles_tasks(user_id, task_id) VALUES($1, $2)`, [userId, task_id]);
            await client.query('COMMIT');
            const { rows: task } = await client.query(`SELECT * FROM get_task_by_id($1)`, [task_id]);
            return task[0];
        }
        catch (error) {
            await client.query('ROLLBACK');
            console.log(error);
            return { message: 'invalid query' };
        }
        finally {
            client.release();
        }
    }
    async isCreator(taskId, userId) {
        try {
            const { rows } = await databases_1.default.query(`SELECT EXISTS(SELECT * FROM creators_tasks WHERE task_id = $1 and user_id = $2)`, [taskId, userId]);
            return rows[0].exists;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateStatus(taskId, statusId) {
        try {
            await databases_1.default.query(` UPDATE tasks_statuses AS ts 
          SET status_id = $2 
          WHERE ts.task_id = $1`, [taskId, statusId]);
            const { rows: status } = await databases_1.default.query(`SELECT ts.task_id, 
                s.name as status_name 
         FROM tasks_statuses AS ts 
           LEFT JOIN statuses AS s ON ts.status_id = s.id
         WHERE ts.task_id = $1`, [taskId]);
            return status[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateTitle(taskId, statusId) {
        try {
            await databases_1.default.query(` UPDATE tasks_statuses AS ts 
          SET status_id = $2 
          WHERE ts.task_id = $1`, [taskId, statusId]);
            const { rows: status } = await databases_1.default.query(`SELECT ts.task_id, 
                s.name as status_name 
         FROM tasks_statuses AS ts 
           LEFT JOIN statuses AS s ON ts.status_id = s.id
         WHERE ts.task_id = $1`, [taskId]);
            return status[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateDescription(taskId, statusId) {
        try {
            await databases_1.default.query(` UPDATE tasks_statuses AS ts 
          SET status_id = $2 
          WHERE ts.task_id = $1`, [taskId, statusId]);
            const { rows: status } = await databases_1.default.query(`SELECT ts.task_id, 
                s.name as status_name 
         FROM tasks_statuses AS ts 
           LEFT JOIN statuses AS s ON ts.status_id = s.id
         WHERE ts.task_id = $1`, [taskId]);
            return status[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateDeadline(taskId, statusId) {
        try {
            await databases_1.default.query(` UPDATE tasks_statuses AS ts 
          SET status_id = $2 
          WHERE ts.task_id = $1`, [taskId, statusId]);
            const { rows: status } = await databases_1.default.query(`SELECT ts.task_id, 
                s.name as status_name 
         FROM tasks_statuses AS ts 
           LEFT JOIN statuses AS s ON ts.status_id = s.id
         WHERE ts.task_id = $1`, [taskId]);
            return status[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async updatePriority(taskId, statusId) {
        try {
            await databases_1.default.query(` UPDATE tasks_statuses AS ts 
          SET status_id = $2 
          WHERE ts.task_id = $1`, [taskId, statusId]);
            const { rows: status } = await databases_1.default.query(`SELECT ts.task_id, 
                s.name as status_name 
         FROM tasks_statuses AS ts 
           LEFT JOIN statuses AS s ON ts.status_id = s.id
         WHERE ts.task_id = $1`, [taskId]);
            return status[0];
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.tasksService = new TasksService();
//# sourceMappingURL=tasks.service.js.map