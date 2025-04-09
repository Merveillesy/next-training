export default async function TasksPage() {
  const response = await fetch(
    "https://todo-api-express-wu7q.onrender.com/api/todos"
  );
  const tasks = await response.json();
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-2xl">Tasks page</div>
      <div>
        {tasks.data?.map((task: any) => (
          <div className="" key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
