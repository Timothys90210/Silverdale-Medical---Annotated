export function initFooter() {
  const root = document.getElementById('footer-root')
  if (!root) return

  root.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">

          <div class="footer-about">
            <img src="/logo.jpg" alt="Silverdale Medical" class="footer-logo" />
            <p>A trusted general practice serving the Silverdale and Hibiscus Coast community. Four convenient locations, one dedicated team.</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/specialists.html">Specialists</a></li>
              <li><a href="/fees.html">Fees &amp; Services</a></li>
              <li><a href="/careers.html">Careers</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Patient Info</h4>
            <ul>
              <li><a href="/patient-resources.html">Patient Resources</a></li>
              <li><a href="/health-alerts.html">Health Alerts</a></li>
              <li><a href="/news.html">Latest News</a></li>
              <li><a href="#book">Book Appointment</a></li>
              <li><a href="#enrol">Enrol Online</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Our Locations</h4>
            <div class="footer-location">
              <strong>Silverdale Medical</strong>
              <span>7 Polarity Rise, Silverdale 0932</span>
              <span>Ph: 09 427 9997</span>
              <a href="#">Get Directions →</a>
            </div>
            <div class="footer-location">
              <strong>Millwater Medical</strong>
              <span>23/175 Millwater Parkway, Millwater 0992</span>
              <span>Ph: 09 320 0873</span>
              <a href="#">Get Directions →</a>
            </div>
            <div class="footer-location">
              <strong>Weiti Creek Medical</strong>
              <span>3 Brian Smith Drive, Silverdale 0992</span>
              <span>Ph: 09 972 9133</span>
              <a href="#">Get Directions →</a>
            </div>
            <div class="footer-location">
              <strong>SkinSafe Skin Cancer Clinic</strong>
              <span>18 Florence Avenue, Orewa 0931</span>
              <span>Ph: 09 242 7546</span>
              <a href="#">Get Directions →</a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <span>© 2024 Silverdale Medical. All rights reserved.</span>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
