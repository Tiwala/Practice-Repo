import java.util.HashMap;

public class Hashmaps {
    public static void main(String[] args) {
        HashMap<String, Integer> examScores = new HashMap<String, Integer>();

        examScores.put("Math", 85);
        examScores.put("Sociology", 99);
        examScores.put("English", 95);
        examScores.put("Psychology", 100);
        examScores.put("Computer Programming", 90);

        // examScores.putIfAbsent("Math", 88); // adds into the HashMap if key is not found
        // examScores.replace("Math", 90); // looks for the key and replaces the value
        // examScores.clear(); // clears out entire HashMap
        examScores.remove("Sociology"); // removes key-value pair

        // forEach loop format for HashMaps
        // first parameter is key, 2nd is value
        examScores.forEach((subject, score) -> {
            // System.out.println(subject + " - " + score);
            examScores.replace(subject, score - 10);
        });
        

        // System.out.println(examScores.get("Psychology")); // to access the value of a specific key in HashMap
        // System.out.println(examScores.size()); // returns the size/length of the HashMap
        // System.out.println(examScores.getOrDefault("Theology", 78)); // returns 78 if not found, otherwise returns the value of the key
        // System.out.println(examScores.containsKey("Math")); // checks if HashMap contains said key
        // System.out.println(examScores.containsValue(100)); // checks if HashMap contains said value
        // System.out.println(examScores.isEmpty()); // checks if HashMap is empty
        System.out.println(examScores.toString());
    }
}
