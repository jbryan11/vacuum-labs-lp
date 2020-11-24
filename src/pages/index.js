import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Products from "../components/sections/softwares"
import Header from "../components/sections/header"
import Services from "../components/sections/services"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <Services/>
    <Products />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
