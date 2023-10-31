import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    const body = await request.text();

    const expectedSignature = crypto
        .createHmac('sha256', process.env.MICROCMS_WEBHOOK_SIGNATURE ?? '')
        .update(body, 'utf8')
        .digest('hex');
    const signature = request.headers.get('X-MICROCMS-Signature') ?? null;
    if (!signature || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
        return NextResponse.json({ message: "Invalid Signature" }, { status: 401 })
    }

    const tag = request.nextUrl.searchParams.get("tag")

    if (!tag)
        return NextResponse.json({ message: "No tag provided" }, { status: 400 })

    revalidateTag(tag)

    return NextResponse.json({ revalidated: true, now: Date.now() })
}
