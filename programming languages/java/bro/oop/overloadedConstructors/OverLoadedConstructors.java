public class OverLoadedConstructors {
    public static void main(String[] args) {
        // overloaded constructors = multiple constructors within a class with the same name, but have different parameters
        // name + parameters = signature

        Pizza pizza = new Pizza("thicc crust", "tomato", "mozzarella", "pepperoni");

        System.out.println("Here are the ingredients of your pizza: ");
        System.out.println(pizza.bread);
        System.out.println(pizza.sauce);
        System.out.println(pizza.cheese);
        System.out.println(pizza.topping);

        // But what if I wanna create a new pizza, and only have 3 parameters?
        // OVERLOADED CONSTRUCTORS
        // Constructors that have the same name but different parameters

        Pizza noToppings = new Pizza("thin crust", "tomato", "mozzarella");

        System.out.println(noToppings.bread);
        System.out.println(noToppings.sauce);
        System.out.println(noToppings.cheese);
    }
}