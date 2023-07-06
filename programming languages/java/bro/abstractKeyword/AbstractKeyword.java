public class AbstractKeyword {
    public static void main(String[] args) {
        // abstract = abstract classes cannot be instantiated, but they can have a subclass
        // abstract methods are declared without an implementation
        // They're used so that the parent class "idea" can't be called, only its subclasses
        // Adds a layer of security to your program

        // Vehicle vehicle = new Vehicle();
        Car car = new Car();

        car.go();
    }
}