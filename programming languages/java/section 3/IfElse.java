public class IfElse {

    public static void main(String[] args) {

        int chemistryGrade = 95;
        int biologyGrade = 75;
        System.out.println("Me: Hi Java, did I score better in biology?");
        // Add if-else statement here
        if (biologyGrade > chemistryGrade) {
            System.out.println("hell yeaa boiiiii");
        } else {
            System.out.println("nah noob");
        }

        double sales = 37.55;
        double costs = 5.55;
        System.out.println("Me: Hi Java, did we make money?");
        // Add if-else statement here
        if (sales > costs) {
            System.out.println("LFG!!!");
        } else {
            System.out.println("AAAAAAAAAAAAAA");
        }
        double temperature = 15.5;
        double targetTemperature = 20.0;
        System.out.println("Me: Hi Java, is the temperature colder than our target?");
        // Add if-else statement here
        if (temperature < targetTemperature) {
            System.out.println("brrrrrrr");
        } else {
            System.out.println("nah bruh it's kinda hot");
        }
        int currentSpeed = 60;
        int speedLimit = 70;
        System.out.println("Me: Hi Java, am I driving slower than the speed limit?");
        // Add if-else statement here
        if (currentSpeed < speedLimit) {
            System.out.println("ya good");
        } else {
            System.out.println("bruh you're going to jail");
        }
        int age = 45;
        int retirementAge = 65;
        System.out.println("Me: Hi Java, am I old enough to retire?");
        // Add if-else statement here
        if (age >= retirementAge) {
            System.out.println("it's time");
        } else {
            System.out.println("nah bruh u gotta work for " + (retirementAge - age) + " more years");
        }
        char myGrade = 'A';
        char bestGrade = 'A';
        System.out.println("Me: Hi Java, did I get the best possible grade?");
        // Add if-else statement here
        if (myGrade == bestGrade) {
            System.out.println("yeaboiiiiiii");
        } else {
            System.out.println("nah you are sentenced to kumon");
        }
        String word = "hello";
        String secondWord = "hello";
        System.out.println("Me: Are the two words the same?");
        // Add if-else statement here
        if (word.equals(secondWord)) {
            System.out.println("duh are u illiterate");
        } else {
            System.out.println("nah, are u illiterate");
        }

        String thirdWord = "hello";
        String fourthWord = "goodbye";
        System.out.println("Me: Are the two words different");
        // Add if-else statement here
        if (!thirdWord.equals(fourthWord)) {
            System.out.println("yahduh");
        } else {
            System.out.println("bruh");
        }
    }
}
