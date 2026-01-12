import javax.swing.*;
import java.awt.*;
import java.util.LinkedHashMap;
import java.util.Map;

public class LyricsPlayer {

    private static JLabel lyricLabel;
    private static long startTime;

    public static void main(String[] args) {

        JFrame frame = new JFrame("LANY - Meant It (Lyrics)");
        frame.setSize(500, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        lyricLabel = new JLabel("🎵 LANY - Meant It", SwingConstants.CENTER);
        lyricLabel.setFont(new Font("Arial", Font.BOLD, 18));
        frame.add(lyricLabel, BorderLayout.CENTER);

        JButton startBtn = new JButton("Start Lyrics");
        frame.add(startBtn, BorderLayout.SOUTH);

        frame.setVisible(true);

        startBtn.addActionListener(e -> startLyrics());
    }

    private static void startLyrics() {
        startTime = System.currentTimeMillis();

        // urutan + timing (detik -> lirik)
        Map<Double, String> lyrics = new LinkedHashMap<>();
        lyrics.put(41.2, "On your lips just leave it");
        lyrics.put(44.9, "If you don't mean it");
        lyrics.put(48.3, "Hurry home, let's never leave the house");
        lyrics.put(53.9, "(But you don't mean it)");
        lyrics.put(56.8, "Let's stay in bed while all our friends go out");
        lyrics.put(62.9, "(But you don't mean it)");
        lyrics.put(66.0, "Why you let those words come out of your mouth?");
        lyrics.put(71.9, "(If you don't mean it)");
        lyrics.put(75.2, "You've been staring at me with a heart of doubt");

        Timer timer = new Timer(100, e -> {
            double currentTime =
                    (System.currentTimeMillis() - startTime) / 1000.0;

            for (Map.Entry<Double, String> entry : lyrics.entrySet()) {
                if (Math.abs(currentTime - entry.getKey()) < 0.15) {
                    lyricLabel.setText(entry.getValue());
                }
            }
        });

        timer.start();
    }
}
