import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class Main {
    public static void main(String[] args) {
        // // JFrame = a GUI window to add components to

        // JFrame frame = new JFrame(); // creates a frame
        // frame.setTitle("JFrame title goes here"); // sets title of frame
        // frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // exits out of application
        // // frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE); // This is the default
        // // frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE); // To piss people off
        // frame.setResizable(false); // prevent frame from being resized
        // frame.setSize(420, 420); // sets the x-dimension and y-dimension of frame
        // frame.setVisible(true); // make frame visible

        // ImageIcon image = new ImageIcon("Gerard Joker.png"); // create an ImageIcon
        // frame.setIconImage(image.getImage()); // change icon of frame
        // frame.getContentPane().setBackground(Color.PINK); // change color of background
        // // frame.getContentPane().setBackground(new Color(r,g,b or Hex)); // You can use RGB or Hex for this shit

        MyFrame myFrame = new MyFrame();
    }
}