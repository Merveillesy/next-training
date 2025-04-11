import { Task } from "@/lib/interface";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="" key={task.id}>
          {task.title}
          <strong>Créer:</strong>
          <span>{task.createdAt}</span>
        </div>
      ))}
    </div>
  );
};
