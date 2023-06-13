public class Decimals {
    // double type, 8 bytes/64 bits
    public static void main(String[] args) {
        double percentage = 73.5;
        System.out.println(percentage + " of percenetages are made up");
        // AVOID USING INT FOR MATH CALCULATIONS
        // It'll only result in whole numbers; Java will cut out the decimals
        // Having at least 1 be a double will result in a double as well
        // Always use double for math calculations
        double wallet = 20;
        int people = 3;
        System.out.println(wallet / people);
    }
}
