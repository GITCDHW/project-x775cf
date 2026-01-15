import { getAiResponse, createBudget, assertSafe } from "@/libs/giga.js";

export async function POST(req) {
  let budget;
  try {
    budget = createBudget({ maxCalls: 1, maxChars: 5000 });

    const body = await req.json();

    const rawText = body.text;

    const aiPrompt = `Generate exactly three distinct, high-impact social media hooks from the following text. Each hook should be concise, engaging, and suitable for platforms like Twitter, LinkedIn, or Instagram. Do not include any introductory or concluding remarks, just the hooks themselves.\n\nProvided text:\n"""\n${rawText}\n"""`;

    const aiResponse = await getAiResponse({
      prompt: aiPrompt,
      json: { hooks: ["string", "string", "string"] },
      budget: budget,
    });
console.log(aiResponse)
    if (!aiResponse) {
      throw new Error("AI response did not return the expected three hooks.");
    }

    return Response.json({ hooks: aiResponse.hooks }, { status: 200 });

  } catch (error) {
    const errorMessage = error.message || "An unexpected error occurred.";
    const statusCode = error.message && (errorMessage.includes("required") || errorMessage.includes("must be a string") || errorMessage.includes("cannot be empty")) ? 400 : 500;
    
    return Response.json({ error: errorMessage }, { status: statusCode });

  } finally {
    if (budget) {
      // The budget automatically tracks usage. No explicit store() call needed for basic tracking.
      // If there were a persistent budget or user-specific tracking, 'store' would be used here.
    }
  }
}
