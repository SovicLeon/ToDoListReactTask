import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'ToDoList',
  description: 'To do list for your tasks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}