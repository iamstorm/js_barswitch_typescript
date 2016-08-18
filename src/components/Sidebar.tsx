import * as React from "react";

export interface SidebarProps {
    bardata: { [key: string]: Array<string> },
    activeMainbar: string,
    activeSidebarItem: string,
    onClickSidebar: (item: string)=>void }

export default class Sidebar extends React.Component<SidebarProps, {}> {
    render() {
        let buildLink = (item: string, index: number) => {
            if(item == this.props.activeSidebarItem) {
                return <li className="active" key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickSidebar(item)}>{item}</a></li>;
            } else {
                return <li key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickSidebar(item)}>{item}</a></li>;
            }
        }
        return (
                <div className="Sidebar">
                    <ul >
                        {this.props.bardata[this.props.activeMainbar].map((item: string, index: number)=>
                            buildLink(item,index))
                        }
                   </ul>
               </div>
        );
    }
}
