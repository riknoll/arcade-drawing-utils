namespace drawing {
    export function createPoint(x: number, y: number): util.Point {
        return new util.Point(x, y);
    }

    export function projectPoint(source: util.Point | Sprite | tiles.Location, angle: number, distance: number) {
        return new util.Point(
            source.x + Math.cos(angle) * distance,
            source.y + Math.sin(angle) * distance
        );
    }

    export function distance(pointA: util.Point | Sprite | tiles.Location, pointB: util.Point | Sprite | tiles.Location) {
        return Math.sqrt(
            (pointA.x - pointB.x) * (pointA.x - pointB.x) +
            (pointA.y - pointB.y) * (pointA.y - pointB.y)
        );
    }

    export function angleBetween(pointA: util.Point | Sprite | tiles.Location, pointB: util.Point | Sprite | tiles.Location) {
        return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x);
    }
}