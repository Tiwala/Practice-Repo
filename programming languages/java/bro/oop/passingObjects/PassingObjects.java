public class PassingObjects {
    public static void main(String[] args) {
        Garage garage = new Garage();

        PassingCar car = new PassingCar("Umbreon");
        PassingCar car2 = new PassingCar("Espeon");

        garage.park(car);
        garage.park(car2);
    }
}
