import { NextResponse } from 'next/server';

type SurveyData = {
  FirstQuestion: string
}

let surveyResults: SurveyData[] = []

export async function POST(request: Request) {
  const result = await request.json() as SurveyData
  surveyResults.push(result)
  return NextResponse.json({ message: 'Survey result saved' })
}

export async function GET() {
  return NextResponse.json(surveyResults)
}