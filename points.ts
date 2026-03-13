namespace drawing {
    //% blockId=drawing_utils_createPoint
    //% block="x $x y $y"
    //% weight=100
    //% group="Points"
    export function createPoint(x: number, y: number): util.Point {
        return new util.Point(x, y);
    }

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