import "./Footer.css";

function FooterPage() {
return(
    <div className="footer">
    <div className="footer-container">
      <div className="footer-content">
          <p className="footer-title"> &copy;{new Date().getFullYear()} made with love by Julia & Liz</p>
      </div>
    </div>
  </div>
  )   
}
   
  export default FooterPage;