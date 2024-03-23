import DomainFilter from './DomainFilter.component';
import { connect } from 'react-redux'
import { getGroupedDomains } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => (getGroupedDomains(state))

export default connect(mapStateToProps)(DomainFilter)
