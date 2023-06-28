import java.util.Scanner;

public class Operators {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("You are playing a game! Press q or Q to quit.");
        String response = scanner.next();

        // if (response.equals("q") || response.equals("Q")) {
        //     System.out.println("You quit the game.");
        // } else {
        //     System.out.println("You're still playing the game! *pew pew*");
        // }

        if (!response.equals("q") || !response.equals("Q")) {
            System.out.println("Nice laro pa");
        } else {
            System.out.println("You quit the game.");
        }

        scanner.close();
    }
}
