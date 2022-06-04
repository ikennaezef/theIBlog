import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name='keywords' content='news, information, blog, lifestyle, sports, tech, webdev' />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'TheIBlog',
  description: 'A community of readers looking to share in each others experience and opinions.'
}

export default Meta