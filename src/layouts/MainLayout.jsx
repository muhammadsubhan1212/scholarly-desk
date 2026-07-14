import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PromoBanner from '../components/layout/PromoBanner';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import LiveChatWidget from '../components/layout/LiveChatWidget';
import NoticeModal from '../components/layout/NoticeModal';
import ToastViewport from '../components/ToastViewport';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <PromoBanner />
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <LiveChatWidget />
      <NoticeModal />
      <ToastViewport />
    </div>
  );
}
