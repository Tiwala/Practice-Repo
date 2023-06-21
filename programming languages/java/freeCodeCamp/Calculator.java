import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first number.");
        double number1 = scanner.nextDouble();

        System.out.println("\n Enter the second number.");
        double number2 = scanner.nextDouble();

        System.out.println("\n What operation do you wish to perform?");
        scanner.nextLine(); // throwaway
        String operation = scanner.nextLine();


        // switch case statements are faster than if-else statements
        switch (operation.toLowerCase()) {
            case "addition":
                System.out.printf("\n %f + %f = %f", number1, number2, (number1 + number2));
                break;
            case "subtraction":
                System.out.printf("\n %f - %f = %f", number1, number2, (number1 + number2));
                break;
            case "multiplication":
                System.out.printf("\n %f * %f = %f", number1, number2, (number1 * number2));
                break;
            case "division":
                if (number2 == 0) {
                    System.out.println("Cannot divide by zero.");
                } else {
                    System.out.printf("\n %f / %f = %f", number1, number2, (number1 / number2));
                }
                break;
            default:
                System.out.println("\n Operation unavailable.");
        }

        // if (operation.equalsIgnoreCase("addition")) {
        //     System.out.printf("\n %f + %f = %f", number1, number2, (number1 + number2));
        // } else if (operation.equalsIgnoreCase("subtraction")){
        //     System.out.printf("\n %f - %f = %f", number1, number2, (number1 + number2));
        // } else if (operation.equalsIgnoreCase("multiplication")) {
        //     System.out.printf("\n %f * %f = %f", number1, number2, (number1 * number2));
        // } else if (operation.equalsIgnoreCase("division")) {
        //     if (number2 == 0) {
        //         System.out.println("Cannot divide by zero.");
        //     } else {
        //         System.out.printf("\n %f / %f = %f", number1, number2, (number1 / number2));
        //     }
        // } else {
        //     System.out.println("\n Operation unavailable.");
        // }

        scanner.close();
    }
}
