import { connect } from 'react-redux'
import { click_sidebar, complete_force_sync_content } from '../actions/barswitch'
import Content from '../components/Content'

const mapStateToProps = (state: any) => {
    return {
        bardata: state.bardata,
        forceSyncContent: state.bardata.forceSyncContent
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSyncComplete: () => {
            dispatch(complete_force_sync_content())
        }
    }
}

const ContentCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)

export default ContentCon
