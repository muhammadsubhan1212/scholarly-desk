import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const OrderNowPage = lazy(() => import('../pages/OrderNowPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
const SitemapPage = lazy(() => import('../pages/SitemapPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const BlogsPage = lazy(() => import('../pages/BlogsPage'));
const BlogPostPage = lazy(() => import('../pages/BlogPostPage'));
const ServiceLandingPage = lazy(() => import('../pages/ServiceLandingPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/policies/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/policies/TermsPage'));
const RevisionPolicyPage = lazy(() => import('../pages/policies/RevisionPolicyPage'));
const RefundPolicyPage = lazy(() => import('../pages/policies/RefundPolicyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function Suspend({ children }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

const serviceSlugs = [
  'academic-writing',
  'article-writing',
  'case-study-writing',
  'essay-writing',
  'copywriting',
  'coursework-writing',
  'cv-writing',
  'dissertation-writing',
  'ebook-writing',
  'ghost-writing',
  'personal-statement',
  'powerpoint-presentation',
  'product-description',
  'research-paper-writing',
  'research-proposal-writing',
  'sop-writing',
  'term-paper-writing',
  'thesis-editing',
  'thesis-writing-service',
  'web-content-writing',
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspend>
            <HomePage />
          </Suspend>
        ),
      },
      {
        path: 'about-us',
        element: (
          <Suspend>
            <AboutPage />
          </Suspend>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspend>
            <ServicesPage />
          </Suspend>
        ),
      },
      {
        path: 'contact-us',
        element: (
          <Suspend>
            <ContactPage />
          </Suspend>
        ),
      },
      {
        path: 'order-now',
        element: (
          <Suspend>
            <OrderNowPage />
          </Suspend>
        ),
      },
      {
        path: 'reviews',
        element: (
          <Suspend>
            <ReviewsPage />
          </Suspend>
        ),
      },
      {
        path: 'sitemap',
        element: (
          <Suspend>
            <SitemapPage />
          </Suspend>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspend>
            <LoginPage />
          </Suspend>
        ),
      },
      {
        path: 'blogs',
        element: (
          <Suspend>
            <BlogsPage />
          </Suspend>
        ),
      },
      {
        path: 'blogs/:slug',
        element: (
          <Suspend>
            <BlogPostPage />
          </Suspend>
        ),
      },
      {
        path: 'privacy-policy',
        element: (
          <Suspend>
            <PrivacyPolicyPage />
          </Suspend>
        ),
      },
      {
        path: 'terms-and-conditions',
        element: (
          <Suspend>
            <TermsPage />
          </Suspend>
        ),
      },
      {
        path: 'revision-policy',
        element: (
          <Suspend>
            <RevisionPolicyPage />
          </Suspend>
        ),
      },
      {
        path: 'refund-policy',
        element: (
          <Suspend>
            <RefundPolicyPage />
          </Suspend>
        ),
      },
      ...serviceSlugs.map((slug) => ({
        path: slug,
        element: (
          <Suspend>
            <ServiceLandingPage slug={slug} />
          </Suspend>
        ),
      })),
      {
        path: '*',
        element: (
          <Suspend>
            <NotFoundPage />
          </Suspend>
        ),
      },
    ],
  },
]);
