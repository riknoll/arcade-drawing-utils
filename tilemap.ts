
namespace drawing {
    //% blockId=drawing_utils_drawTilemap
    //% block="$target draw tilemap $tilemap at x $drawX y $drawY"
    //% tilemap.shadow=variables_get
    //% tilemap.defl=myTilemap
    //% target.shadow=imagescreen
    //% inlineInputMode=inline
    //% group=Tilemaps
    //% weight=100
    export function drawTilemap(
        target: Image,
        tilemap: tiles.TileMapData,
        drawX: number,
        drawY: number,
    ) {
        let left = drawX;
        let top = drawY;
        let tileWidth = 1 << tilemap.scale;

        for (let x = 0; x < tilemap.width; x++) {
            if (left + tileWidth < 0) {
                left += tileWidth;
                continue;
            }

            if (left > target.width) break;
            top = drawY;

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

    //% blockId=drawing_utils_drawAtCamera
    //% block="draw tilemap $tilemap at camera origin"
    //% tilemap.shadow=variables_get
    //% tilemap.defl=myTilemap
    //% weight=90
    //% group=Tilemaps
    export function drawAtCameraOrigin(tilemap: tiles.TileMapData) {
        drawTilemap(screen, tilemap, -game.currentScene().camera.drawOffsetX, -game.currentScene().camera.drawOffsetY);
    }

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
