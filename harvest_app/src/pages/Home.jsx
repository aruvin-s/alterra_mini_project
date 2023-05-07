import React from 'react';
import NavbarUser from '.././components/NavbarUser';
import NavbarAdmin from '.././components/NavbarAdmin';
import { useAtom } from 'jotai';
import { userAtom } from '../components/SignIn';

function Home() {
  const [user] = useAtom(userAtom);

  return (
    <div>
      {user === 'wiraprathamaalvin@gmail.com' ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}
      <div>Homepage</div>
    </div>
  );
}

export default Home;
