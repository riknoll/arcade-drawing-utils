namespace drawing {
    //% blockId=drawing_utils_remapColorsInRect
    //% block="$image remap colors from $from to $to in rect at $topLeft with width $width height $height"
    //% topLeft.shadow=drawing_utils_createPoint
    //% image.shadow=imagescreen
    //% from.shadow=drawing_utils_colorArray
    //% to.shadow=drawing_utils_colorArray
    //% weight=100
    //% group="Transformations"
    //% inlineInputMode=inline
    export function remapColorsInRect(image: Image, topLeft: util.Point | tiles.Location | Sprite, width: number, height: number, from: number[], to: number[]) {
        if (from.length !== to.length) {
            throw "color arrays passed to remap colors must have the same length"
        }

        const buf = control.createBuffer(16);
        for (let i = 0; i < buf.length; i++) {
            const index = from.indexOf(i);
            if (index === -1) {
                buf[i] = i;
            }
            else {
                buf[i] = to[index]
            }
        }

        helpers.imageMapRect(image, topLeft.x, topLeft.y, width, height, buf);
    }

    //% blockId=drawing_utils_remapColors
    //% block="$image remap colors from $from to $to"
    //% image.shadow=variables_get
    //% image.defl="myImage"
    //% from.shadow=drawing_utils_colorArray
    //% to.shadow=drawing_utils_colorArray
    //% weight=90
    //% group="Transformations"
    //% inlineInputMode=inline
    export function remapColors(image: Image, from: number[], to: number[]) {
        remapColorsInRect(image, new util.Point(0, 0), image.width, image.height, from, to);
    }

    //% blockId=drawing_utils_drawRemappedImage
    //% block="$dest draw $source at $position with colors remapped from $from to $to"
    //% source.shadow=screen_image_picker
    //% dest.shadow=imagescreen
    //% from.shadow=drawing_utils_colorArray
    //% to.shadow=drawing_utils_colorArray
    //% position.shadow=drawing_utils_createPoint
    //% weight=80
    //% group="Transformations"
    //% inlineInputMode=inline
    export function drawRemappedImage(dest: Image, source: Image, position: util.Point | tiles.Location | Sprite, from: number[], to: number[]) {
        const mapped = source.clone();
        remapColors(mapped, from, to);
        dest.drawTransparentImage(mapped, position.x, position.y);
    }

    //% blockId=drawing_utils_rotatedImage
    //% block="$image rotated by $rotations clockwise rotations"
    //% image.shadow=variables_get
    //% image.defl="myImage"
    //% weight=70
    //% group="Transformations"
    //% inlineInputMode=inline
    export function rotatedImage(image: Image, rotations: number) {
        rotations = (((rotations | 0) % 4) + 4) % 4;

        if (rotations === 0) {
            return image.clone();
        }
        else if (rotations === 1) {
            return image.rotated(90);
        }
        else if (rotations === 2) {
            return image.rotated(180);
        }
        else {
            return image.rotated(270);
        }
    }

    //% blockId=drawing_utils_scrollImage
    //% block="$image scrolled by x $x y $y"
    //% image.shadow=variables_get
    //% image.defl="myImage"
    //% weight=60
    //% group="Transformations"
    //% inlineInputMode=inline
    export function scrollImage(image: Image, x: number, y: number) {
        image.scroll(x, y);
    }

    //% blockId=drawing_utils_colorArray
    //% block="$color1||$color2|$color3|$color4|$color5|$color6|$color7|$color8|$color9|$color10|$color11|$color12|$color13|$color14|$color15|$color16"
    //% color1.shadow=colorindexpicker
    //% color2.shadow=colorindexpicker
    //% color3.shadow=colorindexpicker
    //% color4.shadow=colorindexpicker
    //% color5.shadow=colorindexpicker
    //% color6.shadow=colorindexpicker
    //% color7.shadow=colorindexpicker
    //% color8.shadow=colorindexpicker
    //% color9.shadow=colorindexpicker
    //% color10.shadow=colorindexpicker
    //% color11.shadow=colorindexpicker
    //% color12.shadow=colorindexpicker
    //% color13.shadow=colorindexpicker
    //% color14.shadow=colorindexpicker
    //% color15.shadow=colorindexpicker
    //% color16.shadow=colorindexpicker
    //% weight=20
    //% group="Transformations"
    //% inlineInputMode=inline
    export function colorArray(
        color1: number,
        color2?: number,
        color3?: number,
        color4?: number,
        color5?: number,
        color6?: number,
        color7?: number,
        color8?: number,
        color9?: number,
        color10?: number,
        color11?: number,
        color12?: number,
        color13?: number,
        color14?: number,
        color15?: number,
        color16?: number,
    ): number[] {
        const result = [
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            color7,
            color8,
            color9,
            color10,
            color11,
            color12,
            color13,
            color14,
            color15,
            color16
        ].filter(c => c !== undefined);

        return result;
    }
}