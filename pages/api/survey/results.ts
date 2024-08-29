import { NextApiRequest, NextApiResponse } from 'next'

type SurveyData = {
  Question1: string
  Question2: string
}

let surveyResults: SurveyData[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = req.body as SurveyData
    surveyResults.push(result)
    res.status(200).json({ message: 'Survey result saved' })
  } else if (req.method === 'GET') {
    res.status(200).json(surveyResults)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}