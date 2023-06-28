import java.util.ArrayList;

public class DemArrayLists {
    public static void main(String[] args) {
        // ArrayList = a resizable array
        // Elements can be added and removed after compilation phase
        // can only store reference data types

        ArrayList<String> food = new ArrayList<String>();

        food.add("pizza");
        food.add("hamburger");
        food.add("hotdog");

        // to replace elements; first arg is index, 2nd is new element
        // food.set(0, "sushi");
        // removes element at index
        // food.remove(2);
        // clears the ArrayList
        // food.clear();

        // for an array, it's .length, but for ArrayList, it's .size()
        for (int i = 0; i < food.size(); i++) {
            // you have to use the .get() method to return an element from an ArrayList
            System.out.println(food.get(i));
        }

        System.out.println(food);
    }
}
