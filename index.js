import { screen, imageResource, getActiveWindow } from "@nut-tree/nut-js";
//controls mouse, points to a target, speed can be modified
// mouse.config.mouseSpeed = 2000;
// const target = new Point(0, 0)
// await mouse.move(left(500))
// await mouse.move(up(500))
// await mouse.move(right(500))
// await mouse.move(down(500))
// await mouse.move(straightTo(target))
// await mouse.rightClick()
// await mouse.setPosition(target)
//keyboard stuff
// keyboard.config.autoDelayMs = 50;
// await keyboard.pressKey(Key.RightSuper)
// await keyboard.pressKey(Key.LeftAlt, Key.F4)
// await keyboard.releaseKey(Key.RightSuper)
// await keyboard.releaseKey(Key.LeftAlt, Key.F4)
// await keyboard.type("What in the seven hells")
const windowRef = await getActiveWindow();
const [title, region] = await Promise.all([windowRef.title, windowRef.region]);
console.log(title, region);
//screen stuff
try {
    const region = await screen.find(imageResource("google.png"));
    console.log(region);
}
catch (err) {
    console.log(err);
}
