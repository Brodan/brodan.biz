import React from 'react';


export default function Footer() {
  return (
    <>
      {/* Large Footer */}
      <footer style={{ marginTop: '80px', marginBottom: '80px', backgroundColor: '#231f20' }} className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="row vert">
                <img src="images/logo2.png" className="img-fluid" style={{ width: '200px' }} alt="Small pixelated Brodan logo" />
              </div>
              <div className="row text-center">
                <p style={{ marginTop: '1rem', fontSize: '75%' }}>
                  &copy; {new Date().getFullYear()} &middot; Christopher "Brodan" Hranj
                  <br />
                  Contributions by <a target="_blank" rel="noopener" href="https://jnnngs.com/" aria-label="Personal website of Ian Jennings">Ian Jennings</a>
                  <br />
                  Pixel logo by <a target="_blank" rel="noopener" href="https://www.instagram.com/dromgp/" aria-label="Instagram of Drip">@dromgp</a>
                  <br />
                  GitHub Corner by <a target="_blank" rel="noopener" href="http://tholman.com" aria-label="Personal website of Tim Holman">Tim Holman</a>
                  <br />
                  SVGs created with <a target="_blank" rel="noopener" href="https://app.haikei.app/" aria-label="Haikei app">Haikei</a>
                  <br />
                </p>
              </div>
              <hr />
              <div className="row vert text-center">
                <div className="col-lg-3">
                  <a target="_blank" rel="noopener" aria-label="GitHub" href="https://github.com/brodan">
                    <img src="images/github.png" height={40} alt="GitHub icon" />
                  </a>
                </div>
                <div className="col-lg-3">
                  <a target="_blank" rel="noopener" aria-label="LinkedIn" href="https://www.linkedin.com/in/christopherhranj">
                    <img src="images/linkedin.png" height={40} alt="LinkedIn icon" />
                  </a>
                </div>
                <div className="col-lg-3">
                  <a target="_blank" rel="noopener" aria-label="The HackNY Webring" href="https://webring.hackny.org">
                    <img src="https://webring.hackny.org/logo.png" height={40} alt="HackNY icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 px-4">
              <div className="row">
                <div className="col">
                  <u className="list-header">Site</u>
                  <ul className="footer-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/now">Now</a></li>
                  </ul>
                </div>
                <div className="col">
                  <u className="list-header">Projects</u>
                  <ul className="footer-list">
                    <li><a target="_blank" rel="noopener" href="https://github.com/brodan" aria-label="Brodan's GitHub Profile">GitHub</a></li>
                    <li><a target="_blank" rel="noopener" href="https://brodan.biz/blog/" aria-label="Brodan's Personal Blog">Blog</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.twilio.com/blog/author/chranj" aria-label="Brodan's Twilio Blog">Twilio Blog</a></li>
                    <li><a target="_blank" rel="noopener" href="https://codepen.io/brodan" aria-label="Brodan's CodePen">CodePen</a></li>
                    <li><a target="_blank" rel="noopener" href="https://dev.to/brodan" aria-label="Brodan's DEV.to Profile">DEV</a></li>
                  </ul>
                </div>
                <div className="col">
                  <u className="list-header">Socials</u>
                  <ul className="footer-list">
                    <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/christopherhranj">LinkedIn</a></li>
                    <li><a target="_blank" rel="noopener" href="https://bsky.app/profile/brodan.bsky.social">Bluesky</a></li>
                    <li><a target="_blank" rel="noopener" href="https://twitter.com/Brodan_">Twitter</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.youtube.com/user/zuuku/" aria-label="Brodan's YouTube channel">YouTube</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.twitch.tv/brodan_">Twitch</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.discogs.com/user/brodan">Discogs</a></li>
                    <li><a target="_blank" rel="noopener" href=" https://www.goodreads.com/brodan">Goodreads</a></li>
                  </ul>
                </div>
                <div className="col">
                  <u className="list-header">Music</u>
                  <ul className="footer-list">
                    <li><a target="_blank" rel="noopener" href="https://linktr.ee/feasterband" aria-label="Feaster Bandcamp">Feaster</a></li>
                    <li><a target="_blank" rel="noopener" href="https://dionaea.bandcamp.com/" aria-label="Dionaea Bandcamp">Dionaea</a></li>
                    <li><a target="_blank" rel="noopener" href="http://will-smith.bandcamp.com/" aria-label="The Fresh Men Bandcamp">The Fresh Men</a></li>
                  </ul>
                </div>
                <div className="col">
                  <u className="list-header">Gaming</u>
                  <ul className="footer-list">
                    <li><a target="_blank" rel="noopener" href="https://halotracker.com/halo-infinite/profile/xbl/craaazy%20taco/overview?experience=overall" aria-label="Halo: Infinite stats">Halo: Infinite</a></li>
                    <li><a target="_blank" rel="noopener" href="https://ptcgp-tracker.com/collection/159027" aria-label="Pokémon TCG Pocket collection">Pokémon TCG Pocket</a></li>
                    <li><a target="_blank" rel="noopener" href="https://runehs.com/OSRS-account-brodan-sucks" aria-label="RuneScape stats">RuneScape</a></li>
                    <li><a target="_blank" rel="noopener" href="https://sr152.app/spartan/craaazy%20taco" aria-label="Halo 5 stats">Halo 5: Guardians</a></li>
                    <li><a target="_blank" rel="noopener" href="https://halo.bungie.net/stats/reach/default.aspx?player=craaazy%20taco" aria-label="Halo: Reach stats">Halo: Reach</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Small Footer */}
      <div className="container d-lg-none">
        <hr />
        <div className="row vert">
          <img src="images/logo2.png" className="img-fluid" style={{ width: '200px' }} alt="Small pixelated Brodan logo" />
        </div>
        <div className="row text-center">
          <p style={{ marginTop: '1rem', fontSize: '75%' }}>
            &copy; {new Date().getFullYear()} &middot; Christopher "Brodan" Hranj
            <br />
            Contributions by <a target="_blank" rel="noopener" href="https://jnnngs.com/" aria-label="Personal website of Ian Jennings">Ian Jennings</a>
            <br />
            Pixel logo by <a target="_blank" rel="noopener" href="https://www.instagram.com/dromgp/">@dromgp</a>
            <br />
            GitHub Corner by <a target="_blank" rel="noopener" href="http://tholman.com">Tim Holman</a>
            <br />
            SVGs created with <a target="_blank" rel="noopener" href="https://app.haikei.app/">Haikei</a>
            <br />
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-4 col-3 d-none d-sm-block"></div>
          <div className="col">
            <a target="_blank" rel="noopener" aria-label="GitHub" href="https://github.com/brodan">
              <img src="images/github.png" height={40} alt="GitHub icon" />
            </a>
          </div>
          <div className="col">
            <a target="_blank" rel="noopener" aria-label="LinkedIn" href="https://www.linkedin.com/in/christopherhranj">
              <img src="images/linkedin.png" height={40} alt="LinkedIn icon" />
            </a>
          </div>
          <div className="col">
            <a target="_blank" rel="noopener" aria-label="The HackNY Webring" href="https://webring.hackny.org">
              <img src="https://webring.hackny.org/logo.png" height={40} alt="HackNY icon" />
            </a>
          </div>
          <div className="col-md-4 col-3 d-none d-sm-block"></div>
        </div>
      </div>
    </>
  );
}
