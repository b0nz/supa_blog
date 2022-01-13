import supabase from '../utils/supabase';

export default function Home({ posts }) {
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export async function getStaticProps() {
  const { data: posts, error } = await supabase.from('posts').select('*');

  if(error) {
    throw new Error(error);
  }

  return {
    props: {
      posts,
    },
  }
}
