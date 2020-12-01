import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import Prices from "../components/sections/pricing/prices"
const Pricing = () => (
  <Layout>
    <SEO title="Pricing" />
    <Navigation />
    <Prices/>
    <Footer />
  </Layout>
)

export default Pricing
