public class Dog extends Animal {
    // method overriding, creating its own implementation
    // Good practice to state @Override
    @Override
    void speak() {
        System.out.println("The dog goes *bark*");
    }
}
