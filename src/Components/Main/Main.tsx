import React from 'react';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="search-bar">
        <ul>
          <li>
            <button type="button">Київ</button>
          </li>
          <li>
            <input type="text" placeholder="Обери найкраще місце для свого відпочинку" />
          </li>
          <li>
            <button type="button">Пошук</button>
          </li>
        </ul>
      </div>
    </main>
  );
};
