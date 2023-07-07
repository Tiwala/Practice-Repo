import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.sampled.*;

public class Main {
    public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {
        // Scanner is to keep the clip running depending on user input
        Scanner scanner = new Scanner(System.in);

        File file = new File("Final Fantasy - Late Night Feeler.wav");
        AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
        Clip clip = AudioSystem.getClip();
        clip.open(audioStream);

        // Initially, it'll only run for as fast as the code runs, so it'll terminate almost immediately
        // What we need to do is keep our program open and running so it doesn't terminate
        // clip.start();

        String response = "";

        while(!response.equals("Q")) {
            System.out.println("P = Play, S = Stop, R = Reset, Q = Quit");
            System.out.print("Enter your choice: ");

            // Since the code is waiting for a user input, it'll keep playing
            response = scanner.next();
            response = response.toUpperCase();

            switch(response) {
                case ("P"): clip.start();
                break;
                case ("S"): clip.stop();
                break;
                case ("R"): clip.setMicrosecondPosition(0); // restarts it to 0
                break;
                case ("Q"): clip.close();
                break;
                default: System.out.println("Not a valid response");
            }
        }
        System.out.println("Thank you for listening");
        scanner.close();
    }
}