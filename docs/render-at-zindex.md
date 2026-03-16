# render at zindex

Runs the given code when the screen is being rendered at the specified z index. This is useful for drawing things like HUD elements or other custom UI.

```sig
drawing.renderAtZIndex(0, function(screen: Image) {
    
})
```

## Parameters

* **z**: The z to run this code at
* **renderFn**: The function that draws to the screen

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
