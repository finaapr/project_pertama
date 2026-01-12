import time

lyrics = [
    (41.2, "On your lips just leave it"),
    (44.9, "If you don't mean it"),
    (48.3, "Hurry home, let's never leave the house"),
    (53.9, "(But you don't mean it)"),
    (56.8, "Let's stay in bed while all our friends go out"),
    (62.9, "(But you don't mean it)"),
    (66.0, "Why you let those words come out of your mouth?"),
    (71.9, "(If you don't mean it)"),
    (75.2, "You've been staring at me with a heart of doubt")
]

start_time = time.time()

print("🎵 LANY - Meant It\n")

for timestamp, line in lyrics:
    while time.time() - start_time < timestamp:
        time.sleep(0.05)
    print(line)
