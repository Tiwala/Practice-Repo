import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        // Turns on inputs for the program
        Scanner scanner = new Scanner(System.in);

        // Keep in mind that scanner.nextLine() has to be done twice if it's after a scanner that isn't .nextLine()
        // scanner.nextInt(), scanner.nextDouble(), scanner.nextFloat(), scanner.nextLong(), scanner.next()
        // You can also do something like int whatever = Integer.parseInt(scanner.nextLine()). What this does is that it turns the integer into a string so we could use nextLine() instead, and don't have to use a throwaway
        // parseDouble(), all the parse shit
        System.out.println("What's your name bruh?");
        String name = scanner.nextLine();

        System.out.printf("Eyyyy %s, wassup?", name);

        scanner.close();
    }
}
