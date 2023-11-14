// src/components/Main.js

import Header from './routes/Header';
import Middle from './routes/Middle';
import DetailsForm from './routes/DetailsForm'

export default function Main(){
  return (
    <div>
        <Header />
        <Middle />
        <DetailsForm />
    </div>
  );
}

