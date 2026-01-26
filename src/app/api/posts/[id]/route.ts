import { supabase } from '@/src/app/utils/supabaseClient';

/**
 * Route Handler方式で特定の記事を取得・削除
 * supabase から取得・削除
 */

/**
 * 特定の記事を取得
 *
 * @param request
 * @param params
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json(data, { status: 200 });
}

/**
 * 特定の記事を削除
 *
 * @param request
 * @param params
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const { error } = await supabase.from('posts').delete().eq('id', id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 200 });
}
