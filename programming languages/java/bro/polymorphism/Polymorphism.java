public class Polymorphism {
    public static void main(String[] args) {
        // polymorphism = greek word for poly-"many", morph-"form"
        // The ability of an object to identify as more than one type

        Car car = new Car();
        Bicycle bicycle = new Bicycle();
        Boat boat = new Boat();

        // Polymorphism in play
        // All of these are type Vehicle due to class
        Vehicle[] racers = {car, bicycle, boat};

        // Equivalent of for-of loop
        for (Vehicle x : racers) {
            x.go();
        }
    }
}