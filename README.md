# arcade-drawing-utils

A MakeCode Arcade extension with lots of blocks for drawing and working with images.

This extension has some notable improvements over the base drawing blocks in the image category:
* All x/y coordinates in the drawing functions are represented by points rather than two numbers. You can also use sprites or tilemap locations wherever a point is accepted
* All of the target image shadow blocks are replaced with the screen by default
* The fill and outline blocks are combined with a dropdown to switch between
* Adds circles, triangles, and four sided polygons
* Adds a block for drawing a thick line in addition to the usual 1-pixel wide lines
* Adds a block for copying part of an image to another image
* Adds a block for drawing tilemaps to the screen (great for games with multiple tilemaps)

In addition to drawing, there are some other new transform blocks for some nifty image effects:
* Lots of blocks for swapping colors in images
* A new block for scrolling images by an x/y value
* A block for rotating images in 90 degree increments

Finally, this extension also provides lots of way for you to make custom render functions that draw to the screen:
* Render on z (just like the similar block in jwunderl/arcade-sprite-utils)
* A dockable version of render on z that you can place inside a function
* Renderables that can be assigned to variables and destroyed (great for drawing temporary things like effects or menus)
* Blocks for rendering above/below individual sprites. Great for applying effects to sprites like [flashing when taking damage][flashing] or for making sprites that [are drawn entirely using shapes][birds]
* A loop that loops over all of the tilemap locations that are currently visible on screen (great for [Animating tiles in tilemaps][animated-tiles])



## Examples
* [Animating tilemap tiles][animated-tiles]
* [Making a player or enemy sprite flash when taking damage][flashing]
* [Creating sprites that are drawn using shapes so that they can be rotated smoothly][birds]

[flashing]: https://arcade.makecode.com/S91428-18801-68843-05645
[animated-tiles]: https://arcade.makecode.com/S65789-16926-21960-00510
[birds]: https://arcade.makecode.com/S61983-13727-78829-82547