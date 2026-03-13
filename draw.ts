namespace drawing {
    export enum DrawMode {
        //% block="outline"
        Outline,
        //% block="fill"
        Fill
    }


    //% blockId=drawing_utils_drawCircle
    //% block="$target $mode circle at $center with radius $radius color $color"
    //% center.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=60
    //% group="Drawing"
    //% inlineInputMode=inline
    export function drawCircle(target: Image, mode: DrawMode, center: util.Point | tiles.Location | Sprite, radius: number, color: number) {
        if (mode === DrawMode.Outline) {
            target.drawCircle(center.x, center.y, radius, color);
        }
        else {
            target.fillCircle(center.x, center.y, radius, color);
        }
    }

    //% blockId=drawing_utils_drawRectangle
    //% block="$target $mode rectangle at $topLeft with width $width height $height color $color"
    //% topLeft.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=50
    //% group="Drawing"
    //% inlineInputMode=inline
    export function drawRectangle(target: Image, mode: DrawMode, topLeft: util.Point | tiles.Location | Sprite, width: number, height: number, color: number) {
        if (mode === DrawMode.Outline) {
            target.drawRect(topLeft.left, topLeft.top, width, height, color);
        }
        else {
            target.fillRect(topLeft.left, topLeft.top, width, height, color);
        }
    }

    //% blockId=drawing_utils_drawLine
    //% block="$target draw line from $start to $end color $color"
    //% start.shadow=drawing_utils_createPoint
    //% end.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=45
    //% group="Drawing"
    //% blockGap=8
    //% inlineInputMode=inline
    export function drawLine(target: Image, start: util.Point | tiles.Location | Sprite, end: util.Point | tiles.Location | Sprite, color: number) {
        target.drawLine(start.x, start.y, end.x, end.y, color);
    }

    //% blockId=drawing_utils_drawThickLine
    //% block="$target draw thick line from $start to $end with thickness $thickness color $color"
    //% start.shadow=drawing_utils_createPoint
    //% end.shadow=drawing_utils_createPoint
    //% thickness.min=0
    //% thickness.defl=2
    //% target.shadow=imagescreen
    //% weight=40
    //% group="Drawing"
    //% inlineInputMode=inline
    export function drawThickLine(target: Image, start: util.Point | tiles.Location | Sprite, end: util.Point | tiles.Location | Sprite, thickness: number, color: number) {
        const angle = Math.atan2(end.y - start.y, end.x - start.x) - Math.PI / 2;
        const oX = Math.cos(angle) * thickness / 2
        const oY = Math.sin(angle) * thickness / 2;

        target.fillPolygon4(
            start.x + oX,
            start.y + oY,
            start.x - oX,
            start.y - oY,
            end.x - oX,
            end.y - oY,
            end.x + oX,
            end.y + oY,
            color
        );
    }

    //% blockId=drawing_utils_drawTriangle
    //% block="$target $mode triangle with points $p1 and $p2 and $p3 color $color"
    //% p1.shadow=drawing_utils_createPoint
    //% p2.shadow=drawing_utils_createPoint
    //% p3.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=30
    //% group="Drawing"
    //% blockGap=8
    //% inlineInputMode=inline
    export function drawTriangle(target: Image, mode: DrawMode, p1: util.Point | tiles.Location | Sprite, p2: util.Point | tiles.Location | Sprite, p3: util.Point | tiles.Location | Sprite, color: number) {
        if (mode === DrawMode.Outline) {
            target.drawLine(p1.x, p1.y, p2.x, p2.y, color);
            target.drawLine(p2.x, p2.y, p3.x, p3.y, color);
            target.drawLine(p3.x, p3.y, p1.x, p1.y, color);
        }
        else {
            target.fillTriangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, color);
        }
    }

    //% blockId=drawing_utils_drawPolygon4
    //% block="$target $mode polygon with points $p1 and $p2 and $p3 and $p4 color $color"
    //% p1.shadow=drawing_utils_createPoint
    //% p2.shadow=drawing_utils_createPoint
    //% p3.shadow=drawing_utils_createPoint
    //% p4.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=25
    //% group="Drawing"
    //% blockGap=8
    //% inlineInputMode=inline
    export function drawPolygon4(target: Image, mode: DrawMode, p1: util.Point | tiles.Location | Sprite, p2: util.Point | tiles.Location | Sprite, p3: util.Point | tiles.Location | Sprite, p4: util.Point | tiles.Location | Sprite, color: number) {
        if (mode === DrawMode.Outline) {
            target.drawLine(p1.x, p1.y, p2.x, p2.y, color);
            target.drawLine(p2.x, p2.y, p3.x, p3.y, color);
            target.drawLine(p3.x, p3.y, p4.x, p4.y, color);
            target.drawLine(p4.x, p4.y, p1.x, p1.y, color);
        }
        else {
            target.fillPolygon4(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, color);
        }
    }

    //% blockId=drawing_utils_drawFromPoints
    //% block="$target $mode from points $points color $color"
    //% points.shadow=lists_create_with
    //% points.defl=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=20
    //% group="Drawing"
    //% blockGap=8
    //% inlineInputMode=inline
    export function drawFromPoints(target: Image, mode: DrawMode, points: (util.Point | tiles.Location | Sprite)[], color: number) {
        if (points.length === 1) {
            screen.setPixel(points[0].x, points[0].y, color);
        }
        else if (mode === DrawMode.Outline) {
            for (let i = 0; i < points.length; i++) {
                const p1 = points[i];
                const p2 = points[(i + 1) % points.length];
                target.drawLine(p1.x, p1.y, p2.x, p2.y, color);
            }
        }
        else if (points.length === 2) {
            const p1 = points[0];
            const p2 = points[1];
            target.fillRect(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y), Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y), color);
        }
        else if (points.length === 3) {
            const p1 = points[0];
            const p2 = points[1];
            const p3 = points[2];
            target.fillTriangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, color);
        }
        else if (points.length === 4) {
            const p1 = points[0];
            const p2 = points[1];
            const p3 = points[2];
            const p4 = points[3];
            target.fillPolygon4(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, color);
        }
        else {
            throw "Only 2-4 points are supported for filled shapes";
        }
    }

    //% blockId=drawing_utils_drawImage
    //% block="$target draw image $image at $location"
    //% location.shadow=drawing_utils_createPoint
    //% target.shadow=imagescreen
    //% weight=15
    //% group="Drawing"
    export function drawImage(target: Image, image: Image, location: util.Point | tiles.Location | Sprite) {
        target.drawTransparentImage(image, location.left, location.top);
    }

    //% blockId=drawing_utils_drawPartialImage
    //% block="$target draw at $destPosition from $source at $sourcePosition w $width h $height"
    //% source.shadow=screen_image_picker
    //% target.shadow=imagescreen
    //% destPosition.shadow=drawing_utils_createPoint
    //% sourcePosition.shadow=drawing_utils_createPoint
    //% weight=10
    //% group="Drawing"
    //% inlineInputMode=inline
    export function drawPartialImage(
        target: Image,
        destPosition: util.Point | tiles.Location | Sprite,
        source: Image,
        sourcePosition: util.Point | tiles.Location | Sprite,
        width: number,
        height: number
    ) {
        target.blit(
            destPosition.x,
            destPosition.y,
            width,
            height,
            source,
            sourcePosition.x,
            sourcePosition.y,
            width,
            height,
            true,
            false
        );
    }
}