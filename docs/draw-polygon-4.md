# draw polygon 4

Draws a quadrilateral to an image.

```sig
drawing.drawPolygon4(image.screenImage(), drawing.DrawMode.Outline, drawing.createPoint(0, 0), drawing.createPoint(0, 0), drawing.createPoint(0, 0), drawing.createPoint(0, 0), 0)
```

## Parameters

* **target**: The image to draw on
* **mode**: The draw mode (outline or fill)
* **p1**: The first point, sprite, or tile location of the quadrilateral
* **p2**: The second point, sprite, or tile location of the quadrilateral
* **p3**: The third point, sprite, or tile location of the quadrilateral
* **p4**: The fourth point, sprite, or tile location of the quadrilateral
* **color**: The color of the quadrilateral

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
