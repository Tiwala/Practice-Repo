public class Car extends Vehicle {

    // You have to create an override for any abstract methods in abstract parents
    @Override
    void go() {
        System.out.println("The driver is driving the car");
    }
}
