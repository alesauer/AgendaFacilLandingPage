export async function POST(request: Request) {
  try {
    console.log("[v0] Received lead submission request")
    
    const body = await request.json()
    console.log("[v0] Lead data:", body)

    const response = await fetch("https://app.barbeiros.app/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    console.log("[v0] Backend response status:", response.status)
    console.log("[v0] Backend response data:", data)

    // Log detalhado para debug
    if (!response.ok) {
      console.error("[v0] Backend returned non-ok status:", {
        status: response.status,
        statusText: response.statusText,
        data
      })
    }

    return Response.json(data, { status: response.status })
  } catch (error) {
    console.error("[v0] Error in leads API route:", error)
    return Response.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    )
  }
}
