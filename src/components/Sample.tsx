import { useState } from 'react';

type User = {
  firstName: string;
  lastName: string;
};

export default function Sample() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    const res = await fetch('https://api.example.com/user');
    const user = await res.json();
    setUser(user);
    setIsLoading(false);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const username = user ? `${user.firstName} ${user.lastName}` : 'Anonymous';

  return (
    <div>
      <h1>Hello, {username}</h1>
      <button type='button' onClick={handleClick}>
        ユーザー名取得
      </button>
    </div>
  );
}
