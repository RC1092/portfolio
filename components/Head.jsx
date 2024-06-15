import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Rushi Chaudhary's Profolio."
      />
      
      <meta property="og:title" content="Rushi Chaudhary's Portfolio" />
      <meta
        property="og:description"
        content="Rushi Chaudhary's Profolio."
      />
     
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Rushi Chaudhary',
};
