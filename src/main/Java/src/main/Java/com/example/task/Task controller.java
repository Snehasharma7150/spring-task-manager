@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final List<Task> tasks = new ArrayList<>();
    private AtomicLong counter = new AtomicLong();

    // GET endpoint to retrieve all tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return tasks;
    }

    // POST endpoint to add a new task
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        task.setId(counter.incrementAndGet());
        tasks.add(task);
        return task;
    }
}
