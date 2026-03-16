namespace drawing {
    /**
     * Remaps the colors in an image within a specified rectangle. All colors in the from array will be change to the corresponding color in the to array.
     * The from and to arrays MUST have the same length.
     *
     *
     * @param image The image to remap colors in
     * @param topLeft The top-left point of the rectangle to remap colors in, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
     * @param width The width of the rectangle to remap colors in
     * @param height The height of the rectangle to remap colors in
     * @param from The colors to remap from
     * @param to The colors to remap to
     */
    //% blockId=drawing_utils_remapColorsInRect
    //% block="$image remap colors from $from to $to in rect at $topLeft with width $width height $height"
    //% help=github:arcade-drawing-utils/docs/remap-colors-in-rect
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

    /**
     * Remaps the colors in an image. All colors in the from array will be change to the corresponding color in the to array.
     * The from and to arrays MUST have the same length.
     *
     *
     * @param image The image to remap colors in
     * @param from The colors to remap from
     * @param to The colors to remap to
     */
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

    /**
     * Draws an image onto another image with specified colors remapped.
     *
     *
     * @param dest the image to draw onto
     * @param source the image to draw
     * @param position the position to draw the image at, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
     * @param from the colors to remap from
     * @param to the colors to remap to
     */
    //% blockId=drawing_utils_drawRemappedImage
    //% block="$dest draw $source at $position with colors remapped from $from to $to"
    //% help=github:arcade-drawing-utils/docs/draw-remapped-image
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

    /**
     * Rotates an image by a certain number of 90 degree clockwise rotations. For example, a value of 1
     * will rotate the image 90 degrees clockwise, a value of 2 will rotate the image 180 degrees, and so on.
     * Values less than 0 or greater than 3 will be wrapped around using modulo arithmetic.
     *
     *
     * @param image the image to rotate
     * @param rotations the number of 90 degree clockwise rotations
     * @returns a new image that is the rotated version of the input image
     */
    //% blockId=drawing_utils_rotatedImage
    //% block="$image rotated by $rotations clockwise rotations"
    //% help=github:arcade-drawing-utils/docs/rotated-image
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

    /**
     * Scrolls an image by a certain amount in the x and y direction. Pixels that roll off the edge will disappear.
     *
     *
     * @param image the image to scroll
     * @param x the amount to scroll in the x direction, positive values scroll to the right and negative values scroll to the left
     * @param y the amount to scroll in the y direction, positive values scroll down and negative values scroll up
     */
    //% blockId=drawing_utils_scrollImage
    //% block="$image scrolled by x $x y $y"
    //% help=github:arcade-drawing-utils/docs/scroll-image
    //% image.shadow=variables_get
    //% image.defl="myImage"
    //% weight=60
    //% group="Transformations"
    //% inlineInputMode=inline
    export function scrollImage(image: Image, x: number, y: number) {
        image.scroll(x, y);
    }

    /**
     * An array of colors.
     */
    //% blockId=drawing_utils_colorArray
    //% block="$color1||$color2|$color3|$color4|$color5|$color6|$color7|$color8|$color9|$color10|$color11|$color12|$color13|$color14|$color15|$color16"
    //% help=github:arcade-drawing-utils/docs/color-array
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