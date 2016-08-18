import { connect } from 'react-redux'
import { click_mainbar, force_sync_content, data_refresh } from '../actions/barswitch'
import Mainbar from '../components/Mainbar'

const mapStateToProps = (state: any) => {
    return {
        bardata: state.bardata,
        activeMainbar: state.bardata.activeMainbar,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    let demoSwitch = false;
    return {
        onClickMainbar: (item: string) => {
            dispatch(click_mainbar(item))
            dispatch(force_sync_content())
        },
        onClickRefreshBtn: () => {
            demoSwitch = !demoSwitch
            fetch(demoSwitch ? "./demo1.json" : "./demo.json")
            .then(response => response.json())
            .then((json) => {
                dispatch(data_refresh(json))
            });
        }
    }
}

const MainbarCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Mainbar)

export default MainbarCon
