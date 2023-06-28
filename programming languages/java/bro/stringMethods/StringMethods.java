public class StringMethods {
    public static void main(String[] args) {
        String name = "Bro";
        // A lot of methods are just the same with JavaScript

        // is the way to compare strings; can't use ==
        boolean result = name.equals("Bro");
        // ignores case
        boolean resultCaps = name.equalsIgnoreCase("bro");
        int nameLength = name.length();

        // returns the character at stated index
        char resultIndex = name.charAt(0);

        // returns the index of the first instance of the character stated
        int resultIndexOf = name.indexOf("r");

        // returns a boolean to check if said string is empty
        boolean isItEmpty = name.isEmpty();

        // duh
        String lowerCase = name.toLowerCase();
        String upperCase = name.toUpperCase();

        // removes empty space
        String trimmedName = name.trim();

        // replaces all instances of the initial char with a new char
        String replacedName = name.replace("oldChar", "newChar");

    }
}
