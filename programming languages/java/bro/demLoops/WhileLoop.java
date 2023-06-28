import java.util.Scanner;

public class WhileLoop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = "";

        // while loop checks the condition first and then executes the block of code
        // while (name.isBlank()) {
        //     System.out.println("Type a name bro!!");
        //     name = scanner.nextLine();
        // }

        // do loop performs the code at least once AND THEN checks for the condition
        do {
            System.out.println("Type a name bro!!");
            name = scanner.nextLine();
        } while (name.isBlank());

        System.out.println("Hello, " + name);

        scanner.close();
    }
}
