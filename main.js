//import kaboom from "kaboom";

// Initialize Kaboom
kaboom();

// Define a simple scene
scene("main", () => {
    add([
        text("Hello Kaboom!", 32),
        pos(12, 12),
    ]);
});

// Start the game
go("main");