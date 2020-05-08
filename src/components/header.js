import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Typography, Box } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#45a29e`,
      marginBottom: `1rem`,
      width: `100%`,
      zIndex: `1`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}
    >
      <Typography variant="h3">
        <Box fontWeight="fontWeightBold">
          <div style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#1f2833`,
                textDecoration: `none`,
                fontStyle: `oblique`,
              }}
            >
              {siteTitle}
            </Link>
          </div>
        </Box>
      </Typography>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
