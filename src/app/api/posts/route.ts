import { supabase } from '@/src/app/utils/supabaseClient';

/**
 * 記事一覧を取得
 *
 * @returns
 */
export async function GET() {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 200 });
}

/**
 * 記事作成
 *
 * @param request
 */
export async function POST(request: Request) {
  const { id, title, content } = await request.json();

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 201 });
}
