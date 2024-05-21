import { NextResponse } from "next/server"
import crypto from "crypto"

type Params = {
  signature: string
  echostr: string
  timestamp: string
  nonce: string
}

export async function GET(request: Request, context: { params: Params }) {
  console.log("get !!!!")

  // /?signature=60a4eca3997a7d600205eca06d0868aa62a4905b&echostr=3771523093571289087&timestamp=1716303775&nonce=871969041
  // const signature = "60a4eca3997a7d600205eca06d0868aa62a4905b"
  // const echostr = "3771523093571289087"
  // const timestamp = "1716303775"
  // const nonce = "871969041"

  const signature = context.params.signature
  const echostr = context.params.echostr
  const timestamp = context.params.timestamp
  const nonce = context.params.nonce
  // Given incoming request /home

  const token = "xfasfsadfasdwwww"

  const sha1 = crypto.createHash("sha1")
  const sha1Str = sha1
    .update([token, timestamp, nonce].sort().join(""))
    .digest("hex")

  console.log()

  return new Response(sha1Str === signature ? echostr : "", { status: 200 })
}

// Define params type according to your route parameters (see table below)
