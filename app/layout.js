// RootLayout.js
import Navbar from "./components/ui/nav";
import { AuthProvider } from "./components/ui/AuthContext";
import "./globals.css";
import Sesion from "./login/page";

export const metadata = {
    title: "POWER GYM",
    description: "Generated by create next app",
};

export default function Home({ children }) {
    return (
        <AuthProvider>
            <html lang="es">
                <head></head>
                <body className="bg-fondoPG">
                    <header>
                        <Navbar />
                    </header>
                    <main style={{ paddingTop: '120px' }}> {/* Ajusta este valor según la altura de tu Navbar */}
                        {children}</main>
                    
                </body>
            </html>
        </AuthProvider>
    );
}
