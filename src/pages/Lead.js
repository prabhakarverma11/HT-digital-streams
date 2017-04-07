import React, {Component} from 'react';
import Page from './Page';
import LeadContainer from '../containers/lead/Lead';

class Lead extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Lead ';
    }

    pageMeta() {
        return [
            {name: 'description', content: 'A reactGo example of a login or register page'}
        ];
    }

    pageLink() {
        return [];
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <div className="app app-header-fixed ">
                    <LeadContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default Lead;
