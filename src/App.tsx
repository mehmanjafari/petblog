import Header from '@components/Header/Header';
import Tags from '@components/Tags/Tags';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routes } from '@routes/routes';
import { useState } from 'react';

export default function App() {
  const [stateIsActive, setStateIsActive] = useState<{
    searchActive: string;
    popupActive: boolean;
  }>({
    searchActive: '',
    popupActive: false,
  });

  const routing = useRoutes(routes);

  return (
    <div className="wrapper">
      <Header stateIsActive={stateIsActive} setStateIsActive={setStateIsActive} />
      <Tags />
      <main className="main">{routing}</main>
    </div>
  );
}
