import React, { Component } from "react";
import "./StatusBar.css"
import statusimg from "../../images/pp4.jpeg"
import { Avatar } from "@mui/material";


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
            <div className="statusbar__container">
                
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                    </div>
                    
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                    </div>
                    
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                    </div>
                    
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                            
                    </div>

                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                    </div>
                    
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                    </div>
                    
                    <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">Nipun</div>
                            
                    </div>
                    
                
            </div>
        </div>

        );

    }

}

export default StatusBar