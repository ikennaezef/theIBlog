import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from '../../lib/sanity';

const postQuery = `*[_type=="post" && slug.current == $slug[0] {
  _id,
  name,
  title,
  subtitle,
  slug,
  image{
    asset->{
      _id,
      url
    }
  }
}]`;

export default Article = () => {

}

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const post = await sanityClient.fetch(postQuery, { slug });

  return {
    props: { data: { recipe } }
  }
}