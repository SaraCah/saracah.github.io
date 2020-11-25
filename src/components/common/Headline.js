import React from "react";

const Headline = (props) => {
    const { label, title, subtitle, divider_1, divider_2, position, className } = props;
    return (
        <header className={`el-headline ${position || "side"} ${className}`}>
            {label && (
                <div className="el-headline-label">
                    <span>{label}</span>
                </div>
            )}
           
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}

export default Headline;
