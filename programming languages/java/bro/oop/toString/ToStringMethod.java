public class ToStringMethod {
    public static void main(String[] args) {
        // toString() = special method that all objects inherit, returns a string that "textually represents" an object.
        // can be used both implicitly and explicitly

        Car car = new Car();

        // returns address of car object in memory, gibberish
        // implicitly does car.toString()
        System.out.println(car);
    }
}
