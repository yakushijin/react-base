import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Menu() {

    const LINKAREA = styled.div`

  `

    const LINKBUTTON = styled.div`

    `
    return (
        <LINKAREA>
            <Link to="/page">
                <LINKBUTTON>ページ</LINKBUTTON>
            </Link>
        </LINKAREA>

    )
}

export default Menu;