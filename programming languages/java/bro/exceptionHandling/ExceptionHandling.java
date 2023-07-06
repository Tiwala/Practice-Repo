import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionHandling {
    public static void main(String[] args) {
        // exception = an event that occurs during the execution of a program that disrupts the normal flow of instructions

        Scanner scanner = new Scanner(System.in);
        
        // any dangerous code, surround with a try block, and handle exceptions with catch blocks
        try {

            System.out.println("Enter a whole number to divide: ");
            int x = scanner.nextInt();

            System.out.println("Enter a whole number to be the divident: ");
            int y = scanner.nextInt();

            int z = x/y;

            System.out.println("result: " + z);
        } catch(ArithmeticException e) {
            System.out.println("You can't divide by zero! IDIOT!");
        } catch(InputMismatchException e) {
            System.out.println("PLEASE ENTER A NUMBER OMFG!!!");
        }
        // This handles all exceptions without specificity, but it's not good practice
        // catch(Exception e) {
            // System.out.println("Something went wrong");
        // }
        // finally block always runs after the try catch regardless of result
        finally {
            System.out.println("This will always print");
            scanner.close();
        }
    }
}