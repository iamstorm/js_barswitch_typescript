import * as React from "react";

export interface MainbarProps {
    bardata: {
        Mainbar: Array<string>,
        [key: string]: Array<string> },
    activeMainbar: string,
    onClickMainbar: (item: string)=>void,
    onClickRefreshBtn: ()=>void
}

export default class Mainbar extends React.Component<MainbarProps, {}> {
    render() {
        let buildLink = (item: string, index: number) => {
            if(item == this.props.activeMainbar) {
                return <li className="active" key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickMainbar(item)}>{item}</a></li>;
            }else {
                return <li key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickMainbar(item)}>{item}</a></li>;
            }
        }
        return (
            <div className="Mainbar">
                <ul>
                    {this.props.bardata.Mainbar.map((item, index)=>
                        buildLink(item,index))
                    }
                </ul>
                <button onClick={this.props.onClickRefreshBtn}>refresh data</button>
            </div>
        )
    }
}
