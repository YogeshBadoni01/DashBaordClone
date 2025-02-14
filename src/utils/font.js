import { Roboto} from 'next/font/google';

const Roboto_init = Roboto({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800','900'],
    variable:'--font-inter',
    display:'swap'
  });
  


  export  const Roboto = Roboto_init.variable;
