import javax.swing.JOptionPane;

public class Gui {
    public static void main(String[] args) {
        // spawns an input dialog box once run
        String name = JOptionPane.showInputDialog("Enter your name");
        // greets you when you send the input
        JOptionPane.showMessageDialog(null, "Hello " + name);

        // the showInputDialog method only takes strings, so we have to make it an integer
        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age"));
        JOptionPane.showMessageDialog(null, "You are " + age + " years old");

        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height"));
        JOptionPane.showMessageDialog(null, "You are " + height + " cm");
    
    }
}