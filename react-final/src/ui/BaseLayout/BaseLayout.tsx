import { Logo } from '../Logo/Logo';

export const BaseLayout = () => {
  return (
    <>
      <header className='container'>
        <Logo />
      </header>
      <main className='container'></main>
      <footer className='container'></footer>
    </>
  );
};
