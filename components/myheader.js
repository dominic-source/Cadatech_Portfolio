import Head from 'next/head'

// @description This Myheader function is used to add headers to pages where it is needed accordingly
export default function Myheader(props){

    return (
    <Head>
      <meta name="description" content='A sample of my portfolia website App'/>

      <meta charSet='utf-8'/>

      <meta name='viewport' content="width=device-width, initial-scale=1.0"/>

      <meta name='keywords' content='Web design template, web designer, hire web developer' />

      <meta httpEquiv='author' content='Morba Chinonso' />

      <meta httpEquiv='content-language' content='en-us' />
      
      <title>Google_Ecommerce - {props.page}</title>
      {/* <link 
      rel='preload'
      href='../asset/fonts/Acumin-BdPro.otf'
      as='font'
      type='font/otf'
      crossOrigin='anonymous'
      />
      <link 
      rel='preload'
      href='../asset/fonts/Acumin-ItPro.otf'
      as='font'
      type='font/otf'
      crossOrigin='anonymous'
      />
      <link 
      rel='preload'
      href='../asset/fonts/Helvetica_NeueLTW0693BlkExtObl.ttf'
      as='font'
      type='font/ttf'
      crossOrigin='anonymous'
      /> */}
    </Head>
    )
}