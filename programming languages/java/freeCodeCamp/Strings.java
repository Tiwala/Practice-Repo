/**
 * HelloWorld
 */
public class Strings {
    public static void main(String[] args) {
        String name = "Gerard"; // %s
        String country = "Philippines";
        int age = 28; // %d, also for longs
        double gpa = 3.98; // %f, for floats and doubles
        char percent = '%'; // %c
        boolean lies = false; // %b

        // %s is string, %d is for int, %f is for floats and decimals, %c is for characters, %b is for booleans
        // String formattedString = String.format("My name is %s. I am from %s. I am %d years old. My GPA is %f. I attended 100%c of my classes. This is %b.", name, country, age, gpa, percent, lies);

        // System.out.println(formattedString);

        // printf is just a sysout with String.format(format, arguments)
        System.out.printf("My name is %s. I am from %s. I am %d years old. My GPA is %f. I attended 100%c of my classes. This is %b.", name, country, age, gpa, percent, lies);

        // Methods
        int nameLength = name.length(); // length of string
        boolean isEmpty = name.isEmpty(); // returns boolean whether string 
        String caps = name.toUpperCase(); // makes caps
        String lowerCase = name.toLowerCase(); // makes shit small

        String string1 = "tae";
        String string2 = "Tae";
        Boolean isEqual = string1.equals(string2); // checks if 2 string values are equal
        Boolean isEqualCaps = string1.equalsIgnoreCase(string2); // same as above but ignores caps

        String blueSky = "The sky is blue.";
        String redSky = blueSky.replace("blue", "red"); // creates a new string with the substring replaced; DOES NOT CHANGE ORIGINAL STRING
        boolean containsBlue = blueSky.contains("blue"); // Checks if string contains substring

    }
}