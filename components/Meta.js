import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name='keywords' content='news, information, blog, lifestyle, sports, tech, webdev' />
      <meta name='description' content={description} />
      <title>{title}</title>

      {/* <!-- ### Manifest and icons ### -->
	  <!-- General --> */}
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="theme-color" content="#ffffff" />
      <meta name="application-name" content="TheIBlog" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />


      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/favicon-16x16.png" color="grey"></link>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'TheIBlog',
  description: 'A community of readers looking to share in each others experience and opinions.'
}

export default Meta