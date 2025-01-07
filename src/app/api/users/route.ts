import { NextResponse } from 'next/server';
import mockedUsers from '../../../utils/mockData/users.json';


export async function GET() {
  console.log({mockedUsers})
  return NextResponse.json(mockedUsers);
}