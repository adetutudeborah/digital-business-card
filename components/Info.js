import React from "react"

export default function Info(){
    return (
        <div>
        <img src="../images/AdetutuO.jpg" alt="profile-picture" className="profile-picture"/>
        
        <h2 className="name">Adetutu Oluwasanmi</h2>
        <h3 className="role">Frontend Developer</h3>
        <h4 className="website">adetutuoluwasanmi.website</h4>
        
        <div className="social-buttons">
        <button className="email-text" ><i className="fa-solid fa-envelope email-icon"></i> Email</button>
        <button className="linkedln-text"><i className="fa-brands fa-linkedin linkedin-icon"></i> LinkedIn</button>
        </div>
        </div>
    )
}