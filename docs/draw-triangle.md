# draw triangle

Draws a triangle to an image.

```sig
drawing.drawTriangle(image.screenImage(), drawing.DrawMode.Outline, drawing.createPoint(0, 0), drawing.createPoint(0, 0), drawing.createPoint(0, 0), 0)
```

## Parameters

* **target**: The image to draw on
* **mode**: The draw mode (outline or fill)
* **p1**: The first point, sprite, or tile location of the triangle
* **p2**: The second point, sprite, or tile location of the triangle
* **p3**: The third point, sprite, or tile location of the triangle
* **color**: The color of the triangle

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
