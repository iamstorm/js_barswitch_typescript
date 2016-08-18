import * as React from "react";

export interface ContentProps {
    bardata: { activeMainbar: string, activeSidebar: { [key: string]: string } },
    forceSyncContent: boolean,
    onSyncComplete: ()=>void
}

export default class Content extends React.Component<ContentProps, {}>{
        _content:Object;
        constructor(props: ContentProps, context: any) {
            super(props, context);
            this.syncWithBar = this.syncWithBar.bind(this);
        }
        syncWithBar() {
            let sidebarItem = this.props.bardata.activeSidebar[this.props.bardata.activeMainbar]
            let $content: any = $(this._content);
            if ($content.tabs("exists", sidebarItem)) {
                $content.tabs("select", sidebarItem)
                this.props.onSyncComplete();
                return;
            }
            $content.tabs('add',{
                title: sidebarItem,
                content:`<iframe src="./pages/${this.props.bardata.activeMainbar}/${sidebarItem}.html"></iframe>`,
                closable:true,
            })

            this.props.onSyncComplete();
        }
        componentDidMount(){
           ($(this._content) as any).tabs({
                border:true
            });
            this.syncWithBar();
        }
        componentDidUpdate(prevProps: any, prevState: any) {
            this.syncWithBar();
        }
        render() {
            return (
                <div className="content" ref={(c) => this._content = c}>
                </div>
            )
        }
}
