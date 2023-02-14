
function Footer({theme}) {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    
    return (
        <p className={theme ? "footer" + " " + "dark" : "footer"}>Copyright © {currentYear} | Built by <strong> &nbsp;Ifeoma Obiakor</strong></p>
    )
   
}

export default Footer;