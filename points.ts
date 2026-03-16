namespace drawing {
    /**
     * An x/y coordinate pair.
     *
     *
     * @param x The x coordinate of the point
     * @param y The y coordinate of the point
     * @returns A new point
     */
    //% blockId=drawing_utils_createPoint
    //% block="x $x y $y"
    //% weight=100
    //% group="Points"
    //% blockGap=8
    export function createPoint(x: number, y: number): util.Point {
        return new util.Point(x, y);
    }

    /**
     * Returns a new point with the camera's left and top offsets subtracted from the given point's coordinates.
     * Use this if you are trying to draw something that is affected by the camera's position.
     *
     *
     * @param point The point, sprite, or tile location to shift by the camera's position
     * @returns A new point with the camera's offsets applied
     */
    //% blockId=drawing_utils_shiftedForCamera
    //% block="$point - camera"
    //% point.shadow=drawing_utils_createPoint
    //% weight=95
    //% group="Points"
    export function shiftedByCamera(point: util.Point | Sprite | tiles.Location): util.Point {
        const camera = game.currentScene().camera;
        return new util.Point(point.x - camera.drawOffsetX, point.y - camera.drawOffsetY);
    }

    /**
     * Creates a new point that is a certain distance and angle from a source point.
     *
     *
     * @param source The source point, sprite, or tile location to project from
     * @param angle The angle to project the point at, in radians
     * @param distance The distance to project the point
     * @returns A new point the specified distance and angle from the source point
     */
    //% blockId=drawing_utils_projectPoint
    //% block="point from $source at angle $angle distance $distance"
    //% source.shadow=drawing_utils_createPoint
    //% weight=90
    //% group="Points"
    export function projectPoint(source: util.Point | Sprite | tiles.Location, angle: number, distance: number) {
        return new util.Point(
            source.x + Math.cos(angle) * distance,
            source.y + Math.sin(angle) * distance
        );
    }

    /**
     * Finds the distance between two points, sprites, or tile locations.
     *
     *
     * @param pointA The first point, sprite, or tile location
     * @param pointB The second point, sprite, or tile location
     * @returns The distance between the two points
     */
    //% blockId=drawing_utils_distance
    //% block="distance from $pointA to $pointB"
    //% pointA.shadow=drawing_utils_createPoint
    //% pointB.shadow=drawing_utils_createPoint
    //% weight=80
    //% group="Points"
    export function distance(pointA: util.Point | Sprite | tiles.Location, pointB: util.Point | Sprite | tiles.Location) {
        return Math.sqrt(
            (pointA.x - pointB.x) * (pointA.x - pointB.x) +
            (pointA.y - pointB.y) * (pointA.y - pointB.y)
        );
    }

    /**
     * Finds the angle from one point, sprite, or tile location to another.
     *
     *
     * @param pointA The start point, sprite, or tile location
     * @param pointB The end point, sprite, or tile location
     * @returns The angle from the start point to the end point in radians
     */
    //% blockId=drawing_utils_angleBetween
    //% block="angle from $pointA to $pointB"
    //% pointA.shadow=drawing_utils_createPoint
    //% pointB.shadow=drawing_utils_createPoint
    //% weight=70
    //% group="Points"
    export function angleBetween(pointA: util.Point | Sprite | tiles.Location, pointB: util.Point | Sprite | tiles.Location) {
        return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x);
    }
}