import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = (props) => {
    const { title, description, children } = props;

    return (
        <Helmet>
            <title>{title} || Developer </title>
            {description && <meta name="description" content={description} />}
            {children}
        </Helmet>
    );
}

export default PageHelmet;
