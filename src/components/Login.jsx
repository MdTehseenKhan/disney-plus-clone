import CTALogoOne from "../assets/images/cta-logo-one.svg"
import CTALogoTwo from "../assets/images/cta-logo-two.png"

const Login = () => {
  return (
    <section className="login-container">
      <div className="content">
        <div className="cta">
          <img src={CTALogoOne} alt="CTA-1" className="cta-logo-one" />
          <a className="signup-btn ">Get all there</a>
          <p className="description ">
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of
            03/06/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </p>
          <img src={CTALogoTwo} alt="CTA-2" className="cta-logo-two " />
        </div>
      </div>
    </section>
  )
}

export default Login
