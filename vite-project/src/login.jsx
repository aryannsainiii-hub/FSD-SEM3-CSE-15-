import { useState } from 'react'

function Login() {
	const [showPassword, setShowPassword] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		setSubmitted(true)
	}

	return (
		<main className="login-page">
			<section className="login-visual" aria-label="Nova workspace">
				<div className="visual-topline">
					<span className="nova-mark">N</span>
					<span className="brand-name">nova</span>
				</div>
				<div className="visual-copy"> 
					<p className="eyebrow">A calmer way to work</p>
					<h1>Make space for your best thinking.</h1>
					<p className="visual-description">Bring your projects, notes, and people into one beautifully simple workspace.</p>
				</div>
				<div className="orbit orbit-large" aria-hidden="true" />
				<div className="orbit orbit-small" aria-hidden="true" />
				<div className="visual-footer"><span className="footer-dot" /><span>Designed for focus</span></div>
			</section>

			<section className="login-panel">
				<div className="login-content">
					<div className="mobile-brand"><span className="nova-mark">N</span><span className="brand-name">nova</span></div>
					<div className="form-heading">
						<p className="eyebrow">Welcome back</p>
						<h2>Sign in to Nova</h2>
						<p>Pick up right where you left off.</p>
					</div>

					<form className="login-form" onSubmit={handleSubmit}>
						<label htmlFor="email">Email address</label>
						<input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
						<div className="password-label-row">
							<label htmlFor="password">Password</label>
							<a href="#forgot-password">Forgot password?</a>
						</div>
						<div className="password-input-wrap">
							<input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required />
							<button className="password-toggle" type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
								{showPassword ? 'Hide' : 'Show'}
							</button>
						</div>
						<label className="remember-me"><input type="checkbox" name="remember" /><span>Keep me signed in</span></label>
						<button className="submit-button" type="submit">Sign in <span aria-hidden="true">&#8594;</span></button>
						{submitted && <p className="form-message" role="status">Thanks. Your sign-in details are ready to send.</p>}
					</form>

					<p className="signup-prompt">New to Nova? <a href="#create-account">Create an account</a></p>
					<p className="legal-copy">By continuing, you agree to Nova's Terms and Privacy Policy.</p>
				</div>
			</section>
		</main>
	)
}

export default Login
