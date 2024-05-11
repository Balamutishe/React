import { CardContent } from '../CardContent/CardContent';
import { Logo } from '../Logo/Logo';
import { Profile } from '../Profile/Profile';

export const BaseLayout = () => {
  return (
    <>
      <header>
        <Logo />
        <Profile />
      </header>
      <main className='main-container'>
        <CardContent />
      </main>
      <footer className='footer-container'>
        <p>Privacy Policy</p>
        <p className='corporation'>2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  );
};
