public class WholeNumbers {
    // Use long to store bigger than 2 billion
    public static void main(String[] args) {
        // Underscores function as commas, making numbers easier to read
        long globalPopulation = 8_000_000_000L;
        System.out.println("The global population is " + globalPopulation);

        long dailyGoogleSearches = 8500_000_000L;
        System.out.println("Daily, there are " + dailyGoogleSearches + " google searches");
    }
}
