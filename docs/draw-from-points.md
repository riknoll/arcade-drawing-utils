# draw from points

Attempts to draw a shape to an image based on an array of points. If the mode is outline, it will draw a line between all of the given points. If the mode is fill, it will draw a rectangle if 2 points are given, a triangle if 3 points are given, and a quadrilateral if 4 points are given. More than 4 points is not supported for filled shapes.

```sig
drawing.drawFromPoints(image.screenImage(), drawing.DrawMode.Outline, [], 0)
```

## Parameters

* **target**: The image to draw on
* **mode**: The draw mode (outline or fill)
* **points**: The array of points, sprites, or tile locations that define the shape
* **color**: The color of the shape

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
