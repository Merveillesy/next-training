import { TASKS_URL } from "@/lib/const";
import { TaskList } from "@/ui/components/tasks/taskList";

export default async function DonesTaskPage() {
  const response = await fetch(TASKS_URL + "?done=true");
  const tasks = await response.json();
  return (
    <div>
      <div>Dones tasks</div>
      <TaskList tasks={tasks.data} />
    </div>
  );
}
