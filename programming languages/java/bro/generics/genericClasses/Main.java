import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {

        // This shit is annoying that you have to create multiple classes to cater to each type, so we just make a generic class
        // MyIntegerClass myInt = new MyIntegerClass(1);
        // MyDoubleClass myDouble = new MyDoubleClass(3.14);
        // MyCharacterClass myChar = new MyCharacterClass('@');
        // MyStringClass myString = new MyStringClass("Hello");

        // bounded types = youcan create the objects of a generic class to have data of specific derived types
        // ex: Number

        MyGenericClass<Integer, Integer> myInt = new MyGenericClass<>(1, 9);
        MyGenericClass<Double, Double> myDouble = new MyGenericClass<>(3.14, 1.01);
        // These bitches are red because in MyGenericClass we explicitly stated that it only accepts numbers
        MyGenericClass<Character, Character> myCharacter = new MyGenericClass<>('@', '$');
        MyGenericClass<String, Character> myString = new MyGenericClass<>("Hello", '!');

        // ArrayList<String> myFriends = new ArrayList<>();

        HashMap<Integer, String> users = new HashMap<>();

        System.out.println(myInt.getValue());
        System.out.println(myDouble.getValue());
        System.out.println(myCharacter.getValue());
        System.out.println(myString.getValue());
    }
}
