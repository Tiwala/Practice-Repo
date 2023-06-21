public class whileLoop {
    public static void main(String[] args) {
        int number = 5;
        int multiplier = 1;

        // while (multiplier <= 10) {
        //     System.out.printf("%d X %d = %d\n", number, multiplier, (number * multiplier));

        //     multiplier++;
        // }
        
        // do while loop
        // difference is which gets executed first
        do {
            System.out.printf("%d X %d = %d\n", number, multiplier, (number * multiplier));

            multiplier++;
        } while (multiplier <= 10);
    }
}