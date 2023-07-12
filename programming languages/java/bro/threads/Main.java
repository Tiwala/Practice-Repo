public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Thread = a thread of execution in a program (kind of like a virtual CPU)
        // The JVM allows an application to have multiple threads running concurrently
        // Each thread can execute parts of your code in parallel with the main thread
        // Each thread has a priority.
        // Threads with higher priority are executed in preference compared to threads with a lower priority

        // The JVM continues to execute threads until either of the following occurs:
        // 1. The exit method of class Runtime has been called
        // 2. All user threads have died

        // When a JVM starts up, there is a thread which calls the main method
        // This thread is called "main"

        // Daemon thread is a low priority thread that runs in background to perform tasks such as garbage collection
        // JVM terminates itself when all user threads(non-daemon threads) finish their execution

        // shows how many active threads are running
        System.out.println(Thread.activeCount());

        // renames current thread
        // Thread.currentThread().setName("trash");

        // gets the name of the current thread
        // System.out.println(Thread.currentThread().getName());

        // sets the current threads priority manually
        // Thread.currentThread().setPriority(10);

        // shows priority of current thread; higher number = higher priority, scale of 1 - 10
        // System.out.println(Thread.currentThread().getPriority());

        // shows if current thread is "alive"
        // System.out.println(Thread.currentThread().isAlive());

        // Puts your thread to sleep after specific amount of time
        // for (int i = 3; i > 0; i--) {
        //     System.out.println(i);
        //     Thread.sleep(1000);
        // }
        // System.out.println("Done.");

        MyThread thread2 = new MyThread();
        thread2.setDaemon(true);
        System.out.println(thread2.isDaemon());

        // Will also run thread.run()
        // Using thread.run() by itself won't actually start thread2
        thread2.start();

        // This will return false initially because you have to start threads first for them to become alive
        // System.out.println(thread2.isAlive());

        // thread2.setName("trashinator");

        // by default, it'll say Thread-0 until you change the name
        // System.out.println(thread2.getName());

        // created threads inherit the priority of the threads that created them
        // i.e. if main was 10, this will also become 10 unless explicitly changed
        // thread2.setPriority(1);
        // System.out.println(thread2.getPriority());
        
        System.out.println(Thread.activeCount());
    }
}