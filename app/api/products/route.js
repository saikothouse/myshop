import { NextResponse } from 'next/server';
import Sellix from '@sellix/node-sdk';

export async function GET() {
  const sellix = new Sellix({ api_key: process.env.SELLIX_API_KEY });
  const products = await sellix.products.list();
  return NextResponse.json(products);
}
