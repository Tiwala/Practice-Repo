import java.util.Arrays;

public class ForLoops {
    public static void main(String[] args) {
        // int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        // int sum = 0;

        // for (int index = 0; index < numbers.length; index++) {
        //     sum += numbers[index];
        // }
        // System.out.println(sum);
        
        // int number = 5;
        // // shows multiplication table for 5
        // for (int multiplier = 1; multiplier < 10; multiplier++) {
        //     System.out.printf("%d X %d = %d\n", number, multiplier, (number * multiplier));
        // }
        
        // shows entire multiplication table from 1 - 10
        // for (int number = 1; number <= 10; number++) {
        //     for (int multiplier = 1; multiplier <= 10; multiplier++) {
        //         System.out.printf("%d X %d = %d \n", number, multiplier, (number * multiplier));
        //     }
        // }

        // for (int number = 1; number <= 50; number++) {
        //     if (number % 2 == 1) {
        //         System.out.println(number);
        //     }
        // }

        int numbers[] = {1, 2, 3, 4, 5};
        
        int sum = 0;

        // essentially a for-of loop in javaScript
        for (int number : numbers) {
            sum += number;
        }
        System.out.println(sum);
    }
}
