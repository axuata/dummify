import * as PImage from "pureimage";
import {PassThrough} from "node:stream";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const size: Record<string, number> = {
        width: Number(query.w),
        height: Number(query.h)
    };
    const dummy = PImage.make(size.width, size.height);
    const context = dummy.getContext("2d");

    if (context) {
        const font = PImage.registerFont('./public/fonts/inter.ttf', 'inter');
        font.loadSync();

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, dummy.width, dummy.height);

        context.fillStyle = '#1e1e1e';
        context.textAlign = 'center';
        context.textBaseline = 'middle'
        // なぜかここの処理が永遠に終わらない
        // context.font = `${dummy.width / 64}px inter`;
        // context.fillText(`${size.width}x${size.height}`, size.width / 2, size.height / 2);
    }

    const passThrough = new PassThrough();

    await PImage.encodePNGToStream(dummy, passThrough);

    setHeader(event, "Content-Type", "image/png");

    return passThrough;
});