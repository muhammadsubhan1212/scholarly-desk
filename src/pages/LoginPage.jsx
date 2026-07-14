import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Button from '../components/ui/Button';
import { Field, Input } from '../components/ui/Field';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isAuthenticated, user, logout } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const result = await login(values.email, values.password, values.remember);
      toast.success(result.message || 'Logged in successfully');
      navigate('/');
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  const emailReg = register('email', { required: 'Email is required' });
  const passReg = register('password', {
    required: 'Password is required',
    minLength: { value: 4, message: 'Minimum 4 characters' },
  });

  return (
    <>
      <Seo title="Login" description="Sign in to your Scholarly Desk account." path="/login" />
      <PageHero title="Login" subtitle="Access your Scholarly Desk account." crumbs={[{ label: 'Login' }]} />
      <section className="container-app flex justify-center py-12 md:py-16">
        <div className="w-full max-w-[24rem] rounded-2xl border border-border bg-surface p-6 shadow-elevated sm:p-8">
          {isAuthenticated ? (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-bold text-primary">
                {(user?.name || user?.email || '?').slice(0, 1).toUpperCase()}
              </div>
              <h2 className="font-display text-xl font-bold tracking-tight text-secondary">
                You&apos;re signed in
              </h2>
              <p className="text-[14px] text-muted">Welcome back, {user?.name || user?.email}.</p>
              <div className="flex justify-center gap-2 pt-1">
                <Button to="/order-now">Place an order</Button>
                <Button variant="outline" onClick={logout}>
                  Log out
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-display text-xl font-bold tracking-tight text-secondary">
                Welcome back
              </h2>
              <p className="mt-1.5 text-[13px] text-muted">Sign in with your email and password.</p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <Field label="Email" error={errors.email?.message} htmlFor="login-email">
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    invalid={!!errors.email}
                    {...emailReg}
                  />
                </Field>
                <Field label="Password" error={errors.password?.message} htmlFor="login-password">
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    invalid={!!errors.password}
                    {...passReg}
                  />
                </Field>
                <label className="flex items-center gap-2 text-[13px] text-muted">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-3.5 w-3.5 rounded border-border text-primary"
                    {...register('remember')}
                  />
                  Remember me on this device
                </label>
                <Button type="submit" className="w-full" loading={submitting}>
                  Sign in
                </Button>
              </form>
              <p className="mt-5 text-center text-[11px] text-muted">
                Demo auth accepts any email and password.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
