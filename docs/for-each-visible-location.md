# for each visible location

Iterates over each tile location that is visible on the screen given the current camera position. This is useful to use with render functions to make sure you don't run extra code for tile locations that the player can't currently see.

```sig
drawing.forEachVisibleLocation(function(col: number, row: number, location: tiles.Location) {
    
})
```

## Parameters

* **callback**: The code to run for each visible tile location. The callback will be given the column, row, and location of each tile.

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
