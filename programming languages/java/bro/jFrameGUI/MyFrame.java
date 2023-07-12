import java.awt.Color;

import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class MyFrame extends JFrame {
    // this constructor does the exact same thing as the shit commented out on Main.java
    MyFrame() {
        // JFrame = a GUI window to add components to

        this.setTitle("JFrame title goes here"); // sets title of frame
        this.setDefaultCloseOperation(this.EXIT_ON_CLOSE); // exits out of application
        // this.setDefaultCloseOperation(this.HIDE_ON_CLOSE); // This is the default
        // this.setDefaultCloseOperation(this.DO_NOTHING_ON_CLOSE); // To piss people off
        this.setResizable(false); // prevent frame from being resized
        this.setSize(420, 420); // sets the x-dimension and y-dimension of frame
        this.setVisible(true); // make frame visible

        ImageIcon image = new ImageIcon("Gerard Joker.png"); // create an ImageIcon
        this.setIconImage(image.getImage()); // change icon of frame
        this.getContentPane().setBackground(Color.PINK); // change color of background
        // frame.getContentPane().setBackground(new Color(r,g,b or Hex)); // You can use RGB or Hex for this shit
    }
}
