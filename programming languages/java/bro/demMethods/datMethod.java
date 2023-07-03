public class datMethod {
    public static void main(String[] args) {
        // method = a block of code that is executed whenever it is called upon

        String name = "Bro";
        int age = 28;

        hello(name, age);

        int x = 3;
        int y = 4;

        int z = addition(x, y);

        System.out.println(z);
    }

    static void hello(String name, int age) {
        System.out.println("Hello " + name + ", I see you are " + age + " years old");
    }

    static int addition(int a, int b) {
        return a + b;
    }
}
