import java.util.ArrayList;

public class ArrayLists {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        // int double float boolean > all primitive types
        // can make them into reference types using the wrapper classes
        // Integer is a wrapper class for primitive int, is the reference type form of int
        // also have Double, Float, Boolean, etc
        // When making an ArrayList, you have to use the wrapper class and not the primitive

        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);

        numbers.remove(2); // removes the element at stated index

        // to print out entire ArrayList
        // System.out.println(numbers.toString());

        // to print out single value
        System.out.println(numbers.get(0));
    }
}