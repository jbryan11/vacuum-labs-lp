import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Contact from "../components/sections/contact"
const ContactUs =()=>(
<Layout>
    <SEO title="Contact Us"/>
    <Navigation />
    <Contact/>
</Layout>
)
export default ContactUs