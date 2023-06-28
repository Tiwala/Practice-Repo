import java.util.Random;

public class Main {
    public static void main(String[] args) {
        
        // pseudorandom, not truly random
        Random random = new Random();

        // Makes the bounds between 1 - 6; without the +1 it'll be 0 - 5
        // int x = random.nextInt(6) + 1;
        // nextDouble() gives us a random value between 0 and 1
        // double y = random.nextDouble();
        boolean z = random.nextBoolean();

        System.out.println(z);
    }
}
