# Bounce Ball

A Javascript project explaining the DOM interaction using device keyboard.

## Keyboard Events

The ```keydown``` event is fired while a user presses a key down.

The ```keyup``` event is fired while a user releases a key.

The ```keypress``` event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event.

Keyboard events have unique properties assigned to their event objects like the ```.key``` property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.

### Lets Code

Now it’s time to create a game! Program this code to dribble the ball on the platform using any key on a keyboard. When a user presses a key down, it should lift the ball up. When the user releases the key, the ball should drop.

First, make a function named ```up()``` that will raise the ```.bottom``` position of the ```ball``` to ```'250px'```.

```javascript
function up(){
  ball.style.bottom = '250px';
}
```

Next, make a function named ```down()``` that will lower the ```.bottom``` position of the ```ball``` to ```'50px'```.

```javascript
function down(){
  ball.style.bottom = '50px';
}
```

Create an event handler property that runs the ```up()``` function when a ```keydown``` event fires on the ```document``` object, or anywhere on the DOM, as the event target.

```javascript
document.onkeydown = up();
```

Create an event handler property that runs the ```down()``` function when a ```keyup``` event fires on the ```document```.

```javascript
document.onkeyup = down();
```

Run your code and play around with the keyboard events to make the ball bounce on the platform. You can try keys like the space bar, letter keys, or number keys!
