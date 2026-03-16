
namespace drawing {
    /**
     * Draws a tilemap to an image at a given point.
     *
     *
     * @param target The image to draw the tilemap on
     * @param tilemap The tilemap data to draw on the image
     * @param point The point to draw the tilemap at
     */
    //% blockId=drawing_utils_drawTilemap
    //% block="$target draw tilemap $tilemap at $point"
    //% tilemap.shadow=variables_get
    //% tilemap.defl=myTilemap
    //% target.shadow=imagescreen
    //% point.shadow=drawing_utils_createPoint
    //% inlineInputMode=inline
    //% group=Tilemaps
    //% weight=100
    export function drawTilemap(
        target: Image,
        tilemap: tiles.TileMapData,
        point: util.Point | tiles.Location | Sprite,
    ) {
        let left = point.x;
        let top = point.y;
        let tileWidth = 1 << tilemap.scale;

        for (let x = 0; x < tilemap.width; x++) {
            if (left + tileWidth < 0) {
                left += tileWidth;
                continue;
            }

            if (left > target.width) break;
            top = point.y;

            for (let y = 0; y < tilemap.height; y++) {
                if (top > target.height) break;

                target.drawTransparentImage(
                    tilemap.getTileImage(tilemap.getTile(x, y)),
                    left,
                    top
                )
                top += tileWidth;
            }
            left += tileWidth;
        }
    }

    /**
     * Draws a tilemap to the screen at the camera's origin. This is useful for drawing tilemaps
     * directly on top of the current tilemap that scroll the same way. For example, creating a
     * tilemap with multiple layers.
     *
     *
     * @param tilemap The tilemap data to draw on the screen
     */
    //% blockId=drawing_utils_drawAtCamera
    //% block="draw tilemap $tilemap at camera origin"
    //% tilemap.shadow=variables_get
    //% tilemap.defl=myTilemap
    //% weight=90
    //% group=Tilemaps
    export function drawAtCameraOrigin(tilemap: tiles.TileMapData) {
        drawTilemap(screen, tilemap, new util.Point(-game.currentScene().camera.drawOffsetX, -game.currentScene().camera.drawOffsetY));
    }

    /**
     * Iterates over each tile location that is visible on the screen given the current camera
     * position. This is useful to use with render functions to make sure you don't run extra code
     * for tile locations that the player can't currently see.
     *
     *
     * @param callback The code to run for each visible tile location. The callback will be given the column, row, and location of each tile.
     */
    //% blockId=drawing_utils_forEachVisibleLocation
    //% block="for each visible tile location with $col $row $location"
    //% handlerStatement
    //% draggableParameters="reporter"
    //% weight=70
    //% group=Tilemaps
    export function forEachVisibleLocation(callback: (col: number, row: number, location: tiles.Location) => void) {
        const camera = game.currentScene().camera;
        const tilemap = game.currentScene().tileMap.data;

        if (!tilemap) return;

        const tileWidth = 1 << tilemap.scale;

        for (let x = camera.left; x < camera.left + screen.width; x += tileWidth) {
            for (let y = camera.top; y < camera.top + screen.height; y += tileWidth) {
                const location = tiles.getTileLocation(x >> tilemap.scale, y >> tilemap.scale);
                callback(location.column, location.row, location);
            }
        }
    }
}
