public class Constructor {
    public static void main(String[] args) {
        // constructors allow you to assign values for constructed objects on creation as passed parameters

        Human gerard = new Human("Gerard", 28, 160.00);

        Human zan = new Human("Zantetsuken", 30, 200);

        gerard.eat();
        gerard.eat();
        System.out.println(gerard.weight);

        zan.drink();
    }
}
