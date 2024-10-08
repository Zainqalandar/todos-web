import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { NotificationProvider } from '@/lib/provider/context/NotificationProvider';
import SedbarWrapper from '@/lib/wrappers/SedbarWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Google Keep Clone',
	description: 'Todo notes app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/google-keep.png" type="image/png" />
			</head>
			<body className={inter.className}>
				<Providers>
					<NotificationProvider>
						<SedbarWrapper>{children}</SedbarWrapper>
					</NotificationProvider>
				</Providers>
			</body>
		</html>
	);
}
