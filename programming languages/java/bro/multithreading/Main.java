public class Main {
    public static void main(String[] args) throws InterruptedException {
        // multithreading = Process of executing multiple threads simultaneously
        // Helps maximum utilization of CPU
        // Threads are independent, they won't affect the execution of other threads
        // An exception in one thread will not interrupt other threads
        // Useful for serving multiple clients, multiplayer games, or other mutually independent tasks


        // 2 ways of creating threads
        // Create a class that extends Thread
        // Create class that implements Runnable interface and make it an argument for Thread
        // People tend to do the latter
        MyThread thread1 = new MyThread();

        MyRunnable runnable1 = new MyRunnable();
        Thread thread2 = new Thread(runnable1);

        // The JVM exits when all user threads (non-daemon) finish
        // Meaning daemon threads will stop even if they're still running JVM dgaf
        // thread1.setDaemon(true);
        // thread2.setDaemon(true);

        thread1.start();
        // .join() method makes it such that main thread will wait for the thread this method is attached to finishes before moving forward
        // You can also put milliseconds as an argument to delay the calling thread (in this case, main) after the thread it's attached to finishes
        // thread1.join();
        thread2.start();
    }
}