import React from "react";

import Card from "./Card";

export default props => {
    return(
        <Card title="Soma de números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{100}</strong>
                </span>
            </div>
        </Card>
    )
}